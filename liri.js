
var request = require("request");
var twitter = require("twitter");
// var spotify = require("node-spotify-api");
var fs = require("fs");
var inquirer = require("inquirer");
var keys = require("./keys.js");

var command = "";
var input = "";

//function to retreive data from Twitter API NPM and log results to console//
function getTweets() {
  var clientTW = new twitter(keys.twitterKeys);
  var paramsTW = {
    screen_name: 'Baron_Von_Tech'
  };
  //add functions
  clientTW.get('statuses/user_timeline', paramsTW, function(error, tweets, response) {
    if (error) {
      return console.log('Error occurred: ' + error)
    }
    tweets.forEach(function(result) {
      console.log("\n---------------------------------");
      console.log("@" + result.user.screen_name + " Tweeted at " + result.created_at);
      console.log(result.text);
      console.log("---------------------------------");

    });
  });
};

inquirer.prompt([
  {
    type: "list",
    message: "Hey! What do you want to do?",
    choices: ["my-tweets"],
    // , "spotify-this-song", "movie-this", "do-what-it-says", "read-log"
    name: "command"
  }
]) .then(function(inquirerResponse) {
    switch (inquirerResponse.command) {
      case "my-tweets":
      command = "my-tweets";
      getTweets();
      break;
    }

});
