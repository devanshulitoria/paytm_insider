const mongoose = require('mongoose');
const StoreSchema= new mongoose.Schema({
    _id: Number,
    content:{
        type:String
    }, 
    kids:{
        type:Number
    }, 
    username:{
        type:String
    },
      createdAt:{
          type:Date
      },
      hnAge:{
        type:Number
    }
});
module.exports= mongoose.model('comments',StoreSchema);