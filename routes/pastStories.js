const express=require('express');
const router = express.Router();
const storyModal= require('../modals/storyModal');
const commentModal= require('../modals/commentModal');


console.log("m here");

//comments



//past-stories
router.get("/",async(req,res)=>{
    console.log("inside past stories");
    try {
        const story= await storyModal.find();
        return res.send(JSON.stringify(story));
    } catch (error) {
      console.log("error from paststories.js-->"+error);
      res.status(500).json({
          error:"error occured"
      })  
    }
});




module.exports=router;