var timerEl = $("#timer");
var highScoreEl = $("#high-score");
var currentScore = $("#current-score");
var guessWord = $("#guess-word");
var startBtn = $("#start-btn");
var gameImageEl = $("#game-image");
var workBank = [
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
var blankWord = [];
var count = 10;

function startGame(event){
    // Select random word
    

    // Timer
    var timeInterval = setInterval(()=>{

        // Check if counter hit zero
        if (count === 0) {
            clearInterval(timeInterval);
        }

        timerEl.text(`Timer: ${count--}`);

    },1000);

    gameImageEl.attr("src", )
}

startBtn.on("click", startGame);
