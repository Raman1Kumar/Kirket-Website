const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");

//Basically this function collect all the ongoing live matches from crickbuzz with their link and return it;

const match_list = async (req, res) => {
  var url = "https://www.cricbuzz.com/cricket-match/live-scores/";

  var matches = [];
  var new_matches = [];

  // var url = "https://m.cricbuzz.com/cricket-match/live-scores/";

  var row_val = matches;

  await axios.get(url).then((html) => {
    console.log("making match list....");
    const $ = cheerio.load(html.data);

    var match = {};

    var TeamBat = $(".cb-lv-scrs-well-live .cb-hmscg-bat-txt .cb-hmscg-tm-nm");
    var TeamBowl = $(
      " .cb-lv-scrs-well-live .cb-hmscg-bwl-txt .cb-hmscg-tm-nm"
    );
    const Link = $(".cb-lv-scrs-well-live");

    var i = 0;
    // var j = 0;
    var TeamA = "";
    var TeamB = "";
    var link = "";

    //collection of all matches
    while (i < Link.length) {
      TeamA = TeamBat.eq(i).html();

      TeamB = TeamBowl.eq(i).html();
      link = "https://www.cricbuzz.com" + Link.eq(i).attr().href;

      //one single match
      match = {
        id: link,
        // id: "hi",
        title: `${TeamA} vs ${TeamB}`,
        // title: "hi",
        description: "Description",
      };

      matches.push(match);

      i++;
    }

    const list_size = matches.length;

    var req_size = list_size - 1;
    var flag = 0;

    //If matches is greater than 8 remove extra
    if (list_size >= 8) {
      req_size = 8;
      flag = 1;
    }

    console.log("match_list_created");
  });

  // return matches;
  console.log(matches);
  res.send(matches);
};

module.exports = match_list;
