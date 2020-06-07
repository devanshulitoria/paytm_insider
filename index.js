const express=require("express");
var cors = require('cors');
const fetch=require("node-fetch");
const redis=require("redis");
const mongoose = require('mongoose');
const storyModal= require('./modals/storyModal');
const commentModal= require('./modals/commentModal');
const connectDB= require('./config/db');
const port=process.env.port || 5000;
const redis_port=process.env.port || 6379;


const client = redis.createClient(redis_port);
const app = express();
app.use(cors());
 app.listen(port,()=>{
 console.log("server is started on port "+port);

 });

 app.use(express.static(__dirname+'/public')); 
 app.use('/comments',require('./routes/comments'));

 app.use('/pastStories',require('./routes/pastStories'));

/*
 app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });*/

 console.log("calling connect DB");
 connectDB();
 app.get('/top-stories',callCache,getRepos);

function setReponse(username,repos){
    return `<h2>${username} has about ${repos} on github</h2>`;

}

function callCache(req,res,next){
    client.exists('cache-data',(err,reply)=>{
        if(err) throw err;

        if (reply === 1) {
            console.log('key exists');
            client.smembers('cache-data', function(err, reply) {
                console.log(reply);
                retriveDataFromBackend(res,reply);
            });
            
        } else {
            next();
        }
       
    });

}

//
async function getRepos(req,res,next){
   try {
       console.log("fecthing data");
       const {username}=req.params;
       const reponse = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
       const data = await reponse.json();
      //console.log("a agaya data-->"+data);
      var myJSON = JSON.stringify(data).substring(1);
       client.sadd("cache-data",myJSON.split(',',10));
       client.expire("cache-data", 600);
       var story_id=myJSON.split(',',10);
       var appended_data="";
       console.log("going inside for loop");
       for( var i=0;i<story_id.length;i++){
        const reponse1 = await fetch(`https://hacker-news.firebaseio.com/v0/item/${story_id[i]}.json`);
        const incoming_data=await reponse1.json();
        console.log("incoming data-->"+incoming_data);
        saveCommentToDB(incoming_data,res);
       }

       retriveDataFromBackend(res,story_id);

   } catch (error) {
       console.log(error);
       res.status(500);
   } 
 }

 function retriveDataFromBackend(res,story_id){
     
     console.log("index.js--retriveDataFromBackend-->"+story_id);
     storyModal.find({
        '_id': { $in:story_id }
    }, function(err, docs){
         console.log(docs);
         res.send(JSON.stringify(docs));
    });

    return;
 }

 function  saveCommentToDB(data,res){
    const story = new storyModal({
        _id: data.id,
        title: data.title,
        score: data.score,
        comments:data.kids,
        username:data.by,
        createdAt:data.time,
        url:data.url
      });
      story
        .save()
        .then(result => {
          console.log(result);
          saveAssociateCommentstoDb(data.kids);
          
        })
        .catch(err => {
          console.log("error in saveCommentToDB/index.js-->"+err);
          
          return;
        });
        return;
}

async function saveAssociateCommentstoDb(commentsArray){
    console.log("inside the saveCommentToDB function with id-->"+commentsArray);
    var data=[];
    try {
        console.log("Inside INdex.js -- going to make api call for comment from hackernews");
        for(var i=0;i<commentsArray.length;i++){
        const reponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentsArray[i]}.json`);
        var temp=await  reponse.json();
        data.push(temp);
        //console.log("api call to comment-->"+data);
        
        }
        console.log("api call to comment-->"+data)
    }
    catch(error){
         console.log("unable to fetch cooment from hackernews-->"+error);
    }
    var commentArr=[];
    console.log("data ka length"+data.length);
   for(var j=0;j<data.length;j++){
     commentArr.push(new commentModal({
        _id: data[j].id,
        content: data[j].text,
        kids: 5,
        username:data[j].by,
        createdAt:data[j].time,
        hnAge:11

      }));
      console.log(data[j].id);
    }

    console.log("commentArr is now full");
     

       commentModal.collection.insert(commentArr, function (err, docs) {
            if (err){ 
                return console.error("index.js-->"+err);
            } else {
              console.log("index.js--Multiple documents inserted to Collection");
            }
          });
        return;
}

app.get('*', function (req, res) { 
    res.sendFile(__dirname+'/public/error.html'); 
}) 