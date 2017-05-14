/* 
Bernard Williams
UCF Bootcamp APR2017 Week 3
Hangman Game
*/

// I grabbed my word ideas from https://www.prdaily.com/Main/Articles/20880.aspx

//Settings to expose to the app are listed below
function getConfig(itemNum) {
  var config = {
    words: [
      {
        word: "awkward",
        hint: "When someone walks into a room and hears you talking crap about them.  That situation is ..."
      },
      {
        word: "jazzy jeff",
        hint: "This DJ hangs with a fresh prince."
      },
      {
        word: "oxygen",
        hint: "This element puts the O in O2"
      },
      {
        word: "yacht",
        hint: "Its bigger than a boat and smaller than a ship."
      },
      {
        word: "zombie",
        hint: "This late night muncher loves smart people with brains."
      }
    ]
  };
  return config;
}
