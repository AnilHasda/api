const express=require("express");
const app=express();
const data=require("./connection");
app.use(express.json);
app.delete("/",async (req,resp)=>{
  let collection=await data();
  let d=collection.deleteOne(req.body);
  let result=await collection.find().toArray();
  resp.send(result);
});
app.listen(3000,()=>{
  console.log("App is running on port:3000")
});