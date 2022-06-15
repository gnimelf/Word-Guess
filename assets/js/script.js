var timerEl = $("#timer");
var highScoreEl = $("#high-score");
var currentScore = $("#current-score");
var guessWord = $("#guess-word");
var startBtn = $("#start-btn");
var gameImageEl = $("#game-image");

var count = 0;

function startGame(event){

    // Timer
    var timeInterval = setInterval(()=>{
        timerEl.text(`Timer: ${count++}`)
    },1000);
}

startBtn.on("click", startGame);