const express = require("express");
const app = express();
const UserModel=require('./../config/database')

// find and update phone number in database
const update_phone=async (req,res)=>{
    console.log("update phone hit");
  
    const update_p=(req.body.phone);
    const update_u=(req.body.username);
  
    
    const user=await UserModel.updateOne({username:req.body.username},{$set:{
      phone:update_p
    }});
  
    console.log(user);
    res.send("ok");
    

  
}

module.exports=update_phone