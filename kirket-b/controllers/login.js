const express = require("express");
const app = express();
const { hashSync, compareSync } = require("bcrypt");
const UserModel = require("../config/database");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const passport = require("passport");
app.use(passport.initialize());
require("./../config/passport");

const login = async (req, res) => {
  console.log("login route hit");

  const user = await UserModel.findOne({ username: req.body.username });

  //3 case possible ,a) Not registered b)password incorrect c)everything is correct

  //Case- User Not found
  if (!user) {
    return res.status(401).send({
      success: false,
      message: "Could not find  user",
    });
  }
  console.log("user");

  //Case- Incorrect Password
  if (!compareSync(req.body.password, user.password)) {
    return res.status(401).send({
      success: false,
      message: "Incorrect password",
    });
  }

  //Case- Everthing is correct Send token
  const payload = {
    username: user.username,
    id: user._id,
  };

  //Sign payload and send
  const token = jwt.sign(payload, "Random String", { expiresIn: "1d" });

  //res.send
  return res.status(200).send({
    success: true,
    message: "Logged in success fully",
    token: "Bearer " + token,
    id: user._id,
    name: user.name,
    username: user.username,
    phone: user.phone,
    stat: user.stat,
    match_link: user.match_link,
  });
};

module.exports = login;
