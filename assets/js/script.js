// Selectors
var timerEl = $("#timer");
var highScoreEl = $("#high-score");
var currentScoreEl = $("#current-score");
var guessWordEl = $("#guess-word");
var startBtnEl = $("#start-btn");
var gameImageEl = $("#game-image");
var footerCopy = $("#footer p");

var year = new Date();

// Variables
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
var count = 20;
var imageNumber = 1;
var correctGuesses = [];
var currentScore = 0;
var highScore = 0;
var localStore = localStorage.getItem("wg_highscore");
var mysteryWord = '';


// Timer
var timeInterval = '';


function startGame(event) {
    $(document).on("keyup", checkGuess);
    

    getRandomWord();

    updateImage();

    timeInterval = setInterval(() => {

        // Check if counter hit zero
        if (count === 0 || imageNumber === 7) {
            clearInterval(timeInterval);
            gameOver();
        }
    
        timerEl.text(`Timer: ${count--}`);
    
    }, 1000);

}

function updateImage() {
    if (imageNumber < 8) {
        gameImageEl.attr("src", `./assets/images/image-${imageNumber}.png`);
    } else {
        gameImageEl.attr("src", `./assets/images/image-${imageNumber}.png`);
        gameOver();
    }
}

// Setup new word for game
function getRandomWord() {
    var randomNum = Math.floor(Math.random() * wordBank.length)
    wordToGuess = wordBank[randomNum];
    mysteryWord = wordToGuess;
    mysteryWord = mysteryWord.replace(" ",' &nbsp; ')
    console.log(wordToGuess);

    // setup blank word
    for (var i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] != ' ') {
            blankWord += " _ ";
            correctGuesses.push(" _ ");
        } else {
            blankWord += ' &nbsp; ';
            correctGuesses.push(' ');
        }
    }
    guessWordEl.html(blankWord);
}

// TODO: When user presses button check if letter is in word and update screen
function checkGuess(event) {
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
            currentScore += 1;
            currentScoreEl.text(`Current Score: ${currentScore}`)
        }
    }

    // check if user got it correct
    if (userGuessCorrect === true) {
        for (var i = 0; i < correctGuesses.length; i++) {
            if (correctGuesses[i] === " "){
                blankWord += ' &nbsp; ';
            } else {
                blankWord += correctGuesses[i];
                guessWordEl.html(blankWord);
            }

        }

    } else {
        // update image if user guess is wrong
        imageNumber += 1;
        updateImage();
    }
    if (blankWord === mysteryWord) {
        currentScore += count;
        currentScoreEl.text(`Current Score: ${currentScore}`);
        gameOver();
    }
}

// Set copyright year in footer
function setCopyRight() {
    footerCopy.html(`&copy Justin Fleming ${year.getFullYear()}`)
}


function gameOver() {
    clearInterval(timeInterval);
    if (highScore < currentScore) {
        highScore = currentScore;
        localStorage.setItem("wg_highscore", highScore);
    } else {
        guessWordEl.html(wordToGuess)
    }
    var playAgain = confirm("Game Over! Would you like to play again?");
    if (playAgain === true){
        resetgame();
        startGame();
    } else {
        resetgame();
    }
}

// reset game board
function resetgame() {

}

function loadHighScore() {
    highScore = localStore;
    if (highScore == null) {
        highScore = 0;
        localStorage.setItem("wg_highscore", highScore);
    }
    highScoreEl.text(`High Score: ${highScore}`);
}

loadHighScore();
setCopyRight();

// Event listeners
startBtnEl.on("click", startGame);

