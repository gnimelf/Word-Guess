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
    "algorithm",
    "argument",
    "arrays",
    "arithmetic operators",
    "assignment operators",
    "augmented reality",
    "autonomous",
    "binary numbers",
    "bit",
    "c++",
    "camel case",
    "coding",
    "coding languages",
    "computer program",
    "conditional statements",
    "else statements",
    "for loops",
    "functions",
    "if statements",
    "integrated development environment",
    "intellij",
    "java",
    "jupyter notebook",
    "linux",
    "loops",
    "main function",
    "machine learning",
    "neural networks",
    "python",
    "scratch",
    "scripts",
    "statement",
    "variable",
    "variable types",
    "while loops"
];
var blankWord = "";
var wordToGuess = "";
var count = 10;
var imageNumber = 1;
var correctGuesses = [];

function startGame(event) {

    getRandomWord();


    updateImage();

    // Timer
    var timeInterval = setInterval(() => {

        // Check if counter hit zero
        if (count === 0) {
            clearInterval(timeInterval);
            // TODO:  gameOver();
        }

        timerEl.text(`Timer: ${count--}`);

    }, 1000);
}

function updateImage() {
    if (imageNumber < 8){
        gameImageEl.attr("src", `./assets/images/image-${imageNumber}.png`); 
    }
}

// Setup new word for game
function getRandomWord() {
    var randomNum = Math.floor(Math.random() * wordBank.length)
    wordToGuess = wordBank[randomNum];
    console.log(wordToGuess);

    // setup blank word
    for (var i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] != ' '){
            blankWord += " _ ";
            correctGuesses.push(" _ ");
        } else {
            console.log( );
            blankWord += ' &nbsp; ';
            correctGuesses.push(' &nbsp; ');
        }
    }
    console.log(blankWord);
    guessWordEl.html(blankWord);
}

// TODO: When user presses button check if letter is in word and update screen
function updateScreen(event) {
    var userGuess = (event.originalEvent.key);
    var userGuessCorrect = false;

    // Reset blankWord var
    blankWord = '';

    // Loop through correct word(s)
    for (var i = 0; i < wordToGuess.length; i++) {
        // if match
        if (userGuess === wordToGuess[i]) {
            correctGuesses[i] = userGuess;
            userGuessCorrect = true;
        }
    }

    // check if user got it correct
    if (userGuessCorrect === true) {
        for (var i = 0; i < correctGuesses.length; i++) {
            console.log(correctGuesses[i])
            blankWord += correctGuesses[i];
            guessWordEl.html(blankWord);
        }
    } else {
        // update image if user guess is wrong
        imageNumber += 1;
        updateImage();
    }
}

// Set copyright year in footer
function setCopyRight() {
    footerCopy.text(`\u00A9 Justin Fleming ${year.getFullYear()}`)
}

setCopyRight();

startBtnEl.on("click", startGame);
$(document).on("keyup", updateScreen);
