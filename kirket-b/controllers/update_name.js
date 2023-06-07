
const express = require("express");
const app = express();
const UserModel=require('./../config/database')

//find  and update name in database 
const update_name = async (req,res)=>{
  console.log("update_name hit");

  const updat_n=(req.body.name);
  const update_u=(req.body.username);

  
  const user=await UserModel.updateOne({username:req.body.username},{$set:{
    name:updat_n
  }});

  res.send("ok");
}

module.exports=update_name