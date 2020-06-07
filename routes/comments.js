const express=require('express');
const router = express.Router();
const commentModal= require('../modals/commentModal');
const storyModal= require('../modals/storyModal');
const fetch=require("node-fetch");

router.get("/:id",async(req,res)=>{
    var comment_ID= req.params.id;
    console.log("comment id-->"+comment_ID);
    storyModal.findById(comment_ID)
        .exec()
        .then(doc => {
          console.log("From database", doc);
          if (doc) {
            displayComment(doc.comments,res);
          } else {
           // IF NOT FOUND IN OUR OWN DATABASE MAKE A API CALL
           saveCommentToDB(doc.kids,res);
          
          }
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ error: err });
        });
    
});

async function displayComment(kids,res){
  console.log("inside display comment function in comment.js-->"+kids);
  commentModal.find({
    '_id': { $in:kids }
}, function(err, docs){
     console.log(docs);
     res.send(JSON.stringify(docs));
});

return;
}

async function  saveCommentToDB(comment_ID,res){
    console.log("inside the saveCommentToDB function with id-->"+comment_ID);
    var data="";
    var temp=comment_ID.split(',',10);
    try {
        console.log("going to make api call for comment from hackernews"+temp.length);
        for(var i=0;i<temp.length;i++){
        console.log(`https://hacker-news.firebaseio.com/v0/item/${temp[i]}.json`);
        const reponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${temp[i]}.json`);
        data =await  reponse.json();
        console.log("api call to comment completed-->"+data);
        res.send(data);
        }
    }
    catch(error){
         console.log("unable to fetch cooment from hackernews-->"+error);
    }
   
    //no need to serve the comments from db as they are already loaded in db when story is loaded
    //displayComment(comment_ID,res);
        return;
}

module.exports=router;