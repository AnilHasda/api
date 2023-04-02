const express=require("express");
const app=express();
const data=require("./connection");
app.get("/",async (req,resp)=>{
  let collection=await data();
  let result=await collection.find({}).toArray();
  
  resp.send(result);
});
app.listen(3000,()=>{
  console.log("App is running on port:3000")
})