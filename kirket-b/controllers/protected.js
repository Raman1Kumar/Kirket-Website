const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const passport = require("passport");
app.use(passport.initialize());
require("./../config/passport.js");

//Middleware is used in routes/product.js  before this function
//If allowed return detail about user
const protected = (req, res) => {
  res.status(200).send({
    success: true,
    user: {
      id: req.user_id,
      username: req.user.username,
    },
  });
};

module.exports = protected;
