console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: '0B15Pq9NOUQkB4CKVsj7FzdAQ',
  consumer_secret: 'yGPyYBhLZ1TzFSdef9U0JAkzdqViwkGgc0tgXN6StW8lim0tSp',
  access_token_key: '887384030089498624-bsSt08515JepOHo5jadzzapZ7Yz7BBn',
  access_token_secret: 'MgmojfmFIszplgvg4daBoa0UB72Tc65pd2ScrYh53ny67',
}




// // Exports is essentially an object that we can add data or variables to
// // We can access them from other files using the 'require' keyword.
// exports.essentials = {
//   drink: "water",
//   eat: "snickers",
//   fun: "phone",
//   friend: "facebook"
// };

// exports.nicetohaves = {
//   tools: ["can opener", "flashlight", "matches"],
//   safety: ["first aid kit", "gloves"]
// };

// var nonessentials = {
//   cookware: "wafflemaker"
// };



// // Using the require keyword lets us access all of the exports
// // in our ess.js file
// var stuffINeed = require("./ess.js");

// // This will print everything in exports.
// console.log("--------------------------");
// console.log("ALL THE STUFF I NEED");
// console.log(stuffINeed);
// console.log("--------------------------");

// // These will print correctly because we imported them
// console.log("Essentials");
// console.log(stuffINeed.essentials);
// console.log("--------------------------");
// console.log("Nice to Haves");
// console.log(stuffINeed.nicetohaves);

// // This won't print anything because it wasn't exported in ess.js
// console.log("--------------------------");
// console.log("Nonessentials");
// console.log(stuffINeed.nonessentials);
