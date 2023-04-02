const express=require("express");
const app=express();
const data=require("./connection");
app.use(express.json);
app.post("/",async (req,resp)=>{
 let collection=await data();
 let result=await collection.insertOne(req.body);
 let raw=await collection.find({}).toArray();
 resp.send(raw);
});
app.listen(3000,()=>{
  console.log("App is running on port:3000");
})