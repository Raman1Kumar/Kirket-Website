const express=require("express");
const app = express();
const router=express.Router();
const passport=require('passport')
app.use(passport.initialize())
require('./../config/passport.js')

const register=require("./../controllers/register");
const login =require("./../controllers/login")
const match_list=require("./../controllers/match_list")
const protected=require("./../controllers/protected")
const update_phone=require("./../controllers/update_phone")
const update_name=require("./../controllers/update_name")

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/match_list").get(match_list)
router.route("/protected").get(passport.authenticate('jwt',{session:false}),protected)
router.route("/update_phone").post(update_phone)
router.route("/update_name").post(update_name)



module.exports=router;