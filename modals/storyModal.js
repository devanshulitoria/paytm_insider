const mongoose = require('mongoose');
const StoreSchema= new mongoose.Schema({
    _id: Number,
    title:{
        type:String,
    }, 
    score:{
        type:Number,
    }, 
    username:{
        type:String,
    }
    , 
    comments:{
        type:Array,
    }
    , 
    url:{
        type:String,
    },
      createdAt:{
          type:Date,
          default:Date.now
      }
});
module.exports= mongoose.model('Stories',StoreSchema);