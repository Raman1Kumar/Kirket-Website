const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const product_routes = require("./routes/product.js");
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
require("./config/passport.js");
require("dotenv").config();

app.use("", product_routes);

let PORT = 4000 || process.env.PORT;
const uri = process.env.MONGODB_URI;

const start = async () => {
  await mongoose.connect(uri);
  app.listen(PORT, () => {
    console.log("App is listening to Port " + PORT);
  });
};

start();
