const express = require("express");
const app = express();
const {hashSync, compareSync}=require('bcrypt');
const UserModel=require('../config/database')
const mongoose=require('mongoose');

const register= async(req,res)=>{


   
        console.log(req.query);
      
        //create new object
        const user=new UserModel({
          name:req.body.Name,
          username:req.body.username,
          password:hashSync(req.body.password,10),
          phone:req.body.phone
        })
      
        //save the object and return it else catch error and send
        user.save().then(user=>{
          res.send({
            success:true,
            message:"user created succesfully",
            user:{
              
              id:user._id,
              name:user.name,
              username:user.username,
              phone:user.phone,
              stat:user.stat,
              match_link:user.match_link
              
            }
          })
        }).catch(err=>{
          res.send({
            success:false,
            message:"user not created",
            error:err
      
          })
        })
      
       
      
    

}

module.exports=register