/* 
Bernard Williams
UCF Bootcamp APR2017 Week 3
Hangman Game
*/

//Text areas to be updated
var txtPrevChoices = document.getElementById("prevChoices");
var txtWordHint = document.getElementById("wordHint");
var txtTheWord = document.getElementById("theWord");
var txtInstructions = document.getElementById("instructions");
var txtPerfMetrics = document.getElementById("perfMetrics");
var txtOverallAvg = document.getElementById("overallAvg");
var imgHangManState = document.getElementById("hangManState");

//Variable to hold the choices that have been submitted
var prevChoices = [];

//Variable that tracks how many wrong answers the user has submitted
var intHangState = 0;

//Variable that holds the word spliced into multiple cells
var wordArray = [];

//Variable that holds the length of the word the computer selected
var wordLength = 0;
var choiceCount = 0;
var theCurrentWord = "";

//This function returns a new word from the config.js file.
function getNewWord() {
  config = getConfig(); //Refernce to the function in the configuration file that returns the configuration object.
  words = config.words; //Array that holds the words and the hiints

  //Pick a word-hint combination from the config file
  rndmCount = Math.floor(Math.random() * words.length);
  console.log("--------getNewWord()----------------------------");
  console.log(words[rndmCount]);
  console.log("------------------------------------");

  txtWordHint.textContent = words[rndmCount].hint;

  return words[rndmCount];
}

//This function initializes the game
function gameInit() {
  txtInstructions.textContent = "Press any Key to Start...";
  imgHangManState.setAttribute("src", "assets/images/hangman-1.png");

  //Get a new word object and use the word and its hint in the game board
  var newWord = getNewWord();
  console.log("----gameInit()--------------------------------");
  console.log(newWord);
  console.log("------------------------------------");
  txtWordHint.textContent = newWord.hint;
  theCurrentWord = newWord.word;

  //Fill the box with dashes
  for (var index = 0; index < theCurrentWord.length; index++) {
    txtTheWord.textContent += "-";
  }
}

//this function resets the graphics on the game board
function resetGameBoard() {}

//This code listens to key press events and calls the choice handler.
document.onkeyup = function(event) {
  // Determines which key was pressed
  var userGuess = event.key;
  console.log("-----------Key Up Event--------------------");
  console.log(userGuess);
  console.log("------------------------------------");
  handleChoice(userGuess);
};

//This code handles the response that the user has typed in and checks to see if it is accurate
function handleChoice(userGuess) {
  prevChoices.push(userGuess);
  txtPrevChoices.textContent += userGuess + " ";
  choiceCount++;
  checkChoice(userGuess);
}

function checkChoice(userGuess) {
  rightChoice = false;
  if (theCurrentWord.search(userGuess) > 0) {
    rightChoice = true;
  }

  console.log("--------Check choice-------------");
  console.log("rightchoice = " + rightChoice);
  console.log(theCurrentWord.search(userGuess));
  console.log("------------------------------------");
  return rightChoice;
}
