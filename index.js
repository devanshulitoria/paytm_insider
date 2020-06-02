const express=require("express");
const fetch=require("node-fetch");
const redis=require("redis");

const port=process.env.port || 5000;
const redis_port=process.env.port || 6379;

const client = redis.createClient(redis_port);
const app = express();
 app.listen(5000,()=>{
 console.log("server is started");

 });

 app.get('/repos/:username',callCache,getRepos);

function setReponse(username,repos){
    return `<h2>${username} has about ${repos} on github</h2>`;

}

function callCache(req,res,next){
    const {username}= req.params;
    client.get(username,(err,data)=>{
        if(err) throw err;

        if(data!=null){
            res.send(setReponse(username,data));
        }
        else{
            next();
        }
    });

}

async function getRepos(req,res,next){
   try {
       console.log("fecthing data");
       const {username}=req.params;
       const reponse = await fetch(`https://api.github.com/users/${username}`);
       const data = await reponse.json();
       const repos = data.public_repos;
       client.setex(username,3600,repos);
       res.send(setReponse(username,repos));

   } catch (error) {
       console.log(error);
       res.status(500);
   } 
 }