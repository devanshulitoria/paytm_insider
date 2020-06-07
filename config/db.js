const mongoose = require('mongoose');
console.log('entered here');
const connectDB=async ()=>{
    try {
        const conn = await mongoose.connect('mongodb+srv://devanshu:devanshu@devanshu-cluster-latjg.mongodb.net/test?retryWrites=true&w=majority',{
            useCreateIndex:true,
            useNewUrlParser:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        });
        console.log(`mongo db connected${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

module.exports=connectDB;