const start = document.getElementById("start-button");
const reset = document.getElementById("reset-button");
var playerScore = 0;
var opponentScore = 0;
const opponentChoices = ["rock", "paper", "scissors"];
document.getElementById("rock-button").addEventListener("click", function () {
    playChoice = "rock";
    return playChoice;

});
document.getElementById("paper-button").addEventListener("click", function () {
    playChoice = "paper";
    return playChoice;

});
document.getElementById("scissors-button").addEventListener("click", function () {
    playChoice = "scissors";
    return playChoice;

});
start.addEventListener("click", function () {
    startGame();
});
reset.addEventListener("click", function () {
    playerScore = 0;
    opponentScore = 0;
    playChoice = "";
    document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
    document.getElementById("opponent-score").innerHTML = "Opponent Score: " + opponentScore;
    document.getElementById("result").innerHTML = "";
});


function startGame() {

    var opponentChoice = opponentChoices[Math.floor(Math.random() * opponentChoices.length)];
    console.log("Opponent's choice: " + opponentChoice);

    console.log("Your choice: " + playChoice);
    if (!playChoice) {
        console.log("Please make a choice before starting the game.");
        document.getElementById("result").innerHTML = "Please make a choice before starting the game.";
        return;
    }
    else {
        if (playChoice === opponentChoice) {
            console.log("It's a tie!");
            document.getElementById("result").innerHTML = "It's a tie!";
        } else if (
            (playChoice === "rock" && opponentChoice === "scissors") ||
            (playChoice === "paper" && opponentChoice === "rock") ||
            (playChoice === "scissors" && opponentChoice === "paper")
        ) {
            console.log("You win!");
            document.getElementById("result").innerHTML = "You win!";
            document.getElementById("player-score").innerHTML = "Player Score: " + ++playerScore;
        } else {
            console.log("You lose!");
            document.getElementById("result").innerHTML = "You lose!";
            document.getElementById("opponent-score").innerHTML = "Opponent Score: " + ++opponentScore;
        }
        
    }
    playChoice = "";


}