/* 
Bernard Williams
UCF Bootcamp APR2017 Week 3
Hangman Game
*/

// I grabbed my word ideas from https://www.prdaily.com/Main/Articles/20880.aspx


//Settings to export
exports.getConfig = function() {
  var config = {
    words: [
      {
        word: "Awkward",
        hint: "When someone walks into a room and hears you talking crap about them.  That situation is ..."
      },
      {
        word: "Jazzy Jeff",
        hint: "This DJ hangs with a fresh prince."
      },
      {
        word: "Oxygen",
        hint: "This element puts the O in O2"
      },
            {
        word: "Yacht",
        hint: "Its bigger than a boat and smaller than a ship."
      },
            {
        word: "Zombie",
        hint: "This late night muncher loves smart people with brains."
      }
    ]
  };
  return config;
};
