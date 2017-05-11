/* 
Bernard Williams
UCF Bootcamp APR2017 Week 3
Hangman Game
*/

var config = require("./config.js");

//This function returns a new word from the config.js file.
function getNewWord() {
  config = config.getConfig();
  words = config.words;
  rndmCount = Math.floor(Math.random() * words.length);
  console.log('------------------------------------');
  console.log(rndmCount);
  console.log('------------------------------------');
  
}
