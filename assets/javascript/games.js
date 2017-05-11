/* 
Bernard Williams
UCF Bootcamp APR2017 Week 3
Hangman Game
*/



//This function returns a new word from the config.js file.
function getNewWord() {
  config = getConfig();
  words = config.words;

  //Pick a word-hint combination from the config file
  rndmCount = Math.floor(Math.random() * words.length);
  console.log('------------------------------------');
  console.log(getConfig(rndmCount);
  console.log('------------------------------------');
  
}
