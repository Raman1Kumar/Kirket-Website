const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:String,
    username:String,
    password:String,
    phone: Number,
    match_link:{
        type:String,
        default:""
    },
    stat: {
        type:Number,
        default:0
    }
})

const UserModel=mongoose.model('User',userSchema);

module.exports=UserModel;