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
var txtCountRight = document.getElementById("countRight");
var txtCountWrong = document.getElementById("countWrong");
var txtCountRemaining = document.getElementById("countRemaining");

//Variable to hold the choices that have been submitted
var prevChoices = [];

//Variable that holds the word spliced into multiple cells
var wordArray = [];

//Variable that holds the current letters and dashes indicating which letters you have hit
var displayArray = [];

//Variable that holds the length of the word the computer selected
var wordLength = 0;
var choiceCount = 0;
var theCurrentWord = "";
var countRight = 0;
var countWrong = 0;
var countRemaining = 6;

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

  //Add the letters of the word individiually into an array
  wordArray = words[rndmCount].word.split("");
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
    displayArray.push("-");
  }
  txtTheWord.textContent = displayArray.join("");
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
  //check to see if the user has already selected this letter
  if (prevChoices.indexOf(userGuess) < 0) {
    //Add the choice to the previously selected list and display
    prevChoices.push(userGuess);
    txtPrevChoices.textContent += userGuess + " ";
    choiceCount++;

    //Is this choice right or wrong?
    if (checkChoice(userGuess)) {
      countRight++;
      txtCountRight.textContent = countRight;
    } else {
      //If the user guesses a wrong answer increment the wrong answer count and change the image
      countWrong++;
      txtCountWrong.textContent = countWrong;
      imgHangManState.setAttribute("src", "assets/images/hangman-" + (countWrong + 1) + ".png");
    }

    
  }
}

function checkChoice(userGuess) {
  rightChoice = false;

  //Location where the letter was found
  var indices = [];

  //Check to see if the letter is used in the random word,
  //if so update the corresponding cell in the displayArray and update the page
  var idx = wordArray.indexOf(userGuess);

  while (idx != -1) {
    //indices.push(idx);
    rightChoice = true;
    displayArray[idx] = userGuess;
    idx = wordArray.indexOf(userGuess, idx + 1);
  }

  txtTheWord.textContent = displayArray.join("");

  console.log("--------Check choice-------------");
  console.log("rightchoice = " + rightChoice);
  console.log(theCurrentWord.search(userGuess));
  console.log(theCurrentWord);
  console.log("------------------------------------");

  return rightChoice;
}
