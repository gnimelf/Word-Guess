// Selectors
var timerEl = $("#timer");
var highScoreEl = $("#high-score");
var currentScore = $("#current-score");
var guessWordEl = $("#guess-word");
var startBtnEl = $("#start-btn");
var gameImageEl = $("#game-image");
var footerCopy = $("#footer p");

var year = new Date();

// 
var wordBank = [
    "Algorithm", 
    "Argument", 
    "Arrays",
    "Arithmetic operators",
    "Assignment operators",
    "Augmented reality",
    "Autonomous",
    "Binary numbers",
    "Bit",
    "C++",
    "Camel case",
    "Coding",
    "Coding languages",
    "Computer program",
    "Conditional statements",
    "Else statements",
    "For loops",
    "Functions",
    "If statements",
    "Integrated Development Environment",
    "IntelliJ",
    "Java",
    "Jupyter Notebook",
    "Linux",
    "Loops",
    "Main function",
    "Machine learning",
    "Neural networks",
    "Python",
    "Scratch",
    "Scripts",
    "Statement",
    "Variable",
    "Variable types",
    "While loops"
];
var blankWord = "";
var wordToGuess = "";
var count = 10;
var imageNumber = 1;
var correctGuesses = [];

function startGame(event){

    getRandomWord();
    

    updateImage();

    // Timer
    var timeInterval = setInterval(()=>{

        // Check if counter hit zero
        if (count === 0) {
            clearInterval(timeInterval);
            // TODO:  gameOver();
        }

        timerEl.text(`Timer: ${count--}`);

    },1000);
}

function updateImage(){
   gameImageEl.attr("src", `./assets/images/image-${imageNumber}.png`) 
}

// Setup new word for game
function getRandomWord(){
    var randomNum = Math.floor(Math.random()*wordBank.length)
    wordToGuess = wordBank[randomNum];
    console.log(wordToGuess);

    // setup blank word
    for (var i=0; i<wordToGuess.length; i++){
        blankWord += " _ ";
        correctGuesses.push(" _ ");
    }
    console.log(blankWord);
    guessWordEl.text(blankWord);
    
}

// TODO: When user presses button check if letter is in word and update screen
function updateScreen(event){
    var userGuess = (event.originalEvent.key);
    blankWord = '';
    // Loop through correct word
    for(var i=0; i<wordToGuess.length; i++){
        // if match
        if (userGuess === wordToGuess[i]){
            correctGuesses[i] = userGuess;
        }
    }
    
    

    for (var i=0; i<correctGuesses.length; i++){
        console.log(correctGuesses[i])
        blankWord += correctGuesses[i];
        guessWordEl.text(blankWord);
    }
    
    

 
}

// Set copyright year in footer
function setCopyRight(){
    footerCopy.text(`\u00A9 Justin Fleming ${year.getFullYear()}`)
}

setCopyRight();

startBtnEl.on("click", startGame);
$(document).on("keyup",updateScreen);
