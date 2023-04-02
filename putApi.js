const express=require("express");
const app=express();
const data=require("./connection");
app.use(express.json());
app.put("/:name",async (req,resp)=>{
  let collection=await data();
  let updata=await collection.updateOne({name:req.params.name},{$set:req.body);
  let result=await collection.find({}).toArray();
  resp.send(result);
});
app.listen(3000,()=>{
  console.log("App is running on port:3000")
})