const start = document.getElementById("start-button");
const reset = document.getElementById("reset-button");
var playerScore = 0;
var opponentScore = 0;
var highScore = 0;
const opponentChoices = ["rock", "paper", "scissors"];
console.log("click the title for a surprise!");
document.getElementById("how-to-play-button").addEventListener("click", function () {
    alert("Welcome to Rock-Paper-Scissors! Rock beats Scissors, Paper beats Rock, and Scissors beats Paper. You can reset the game at any time by clicking the 'Reset Game?' button. Have fun playing!");
});
document.getElementById("rock-button").addEventListener("click", function () {
    playChoice = "rock";
    createRockImage();
    clearPaperImage();
    clearScissorsImage();
    return playChoice;

});
document.getElementById("paper-button").addEventListener("click", function () {
    playChoice = "paper";
    createPaperImage();
    clearRockImage();
    clearScissorsImage();
    return playChoice;

});
document.getElementById("scissors-button").addEventListener("click", function () {
    playChoice = "scissors";
    createScissorsImage();
    clearRockImage();
    clearPaperImage();
    return playChoice;

});
start.addEventListener("click", function () {
    startGame();
});
reset.addEventListener("click", function () {
    if (playerScore > highScore) {
        highScore = playerScore;
        document.getElementById("high-score").innerHTML = "High Score: " + highScore;
    }
    playerScore = 0;
    opponentScore = 0;
    playChoice = "";
    document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
    document.getElementById("opponent-score").innerHTML = "Opponent Score: " + opponentScore;
    document.getElementById("result").innerHTML = "";
    clearAllImages();
});
document.getElementById("easter-egg").addEventListener("click", function () {
    alert("Congratulations! You found the easter egg!");

});

function startGame() {

    var opponentChoice = opponentChoices[Math.floor(Math.random() * opponentChoices.length)];
    console.log("Opponent's choice: " + opponentChoice);
    createOpponentImage(opponentChoice);

    console.log("Your choice: " + playChoice);
    if (!playChoice) {
        clearAllImages();
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
function clearRockImage() {
    // document.getElementById("rock-img").src = "";
    // document.getElementById("rock-img").alt = "";
    document.getElementById("rock-img").style.display = "none";
}
function clearPaperImage() {
    // document.getElementById("paper-img").src = "";
    // document.getElementById("paper-img").alt = "";
    document.getElementById("paper-img").style.display = "none";

}
function clearScissorsImage() {
    // document.getElementById("scissors-img").src = "";
    // document.getElementById("scissors-img").alt = "";
    document.getElementById("scissors-img").style.display = "none";
}
function clearOpponentImage() {
    // document.getElementById("opponent-choice-img").src = "";
    // document.getElementById("opponent-choice-img").alt = "";
    document.getElementById("opponent-choice-img").style.display = "none";
}
function clearAllImages() {
    clearRockImage();
    clearPaperImage();
    clearScissorsImage();
    clearOpponentImage();
}
function createRockImage() {
    document.getElementById("rock-img").src = "https://thumbs.dreamstime.com/b/cartoon-rock-illustration-design-automotive-fans-white-background-cartoon-illustration-featuring-large-rock-322723360.jpg";
    document.getElementById("rock-img").alt = "Rock Image";
    document.getElementById("rock-img").width = 100;
    document.getElementById("rock-img").height = 100;
    document.getElementById("rock-img").style.display = "block";
}
function createPaperImage() {
    document.getElementById("paper-img").src = "https://th.bing.com/th/id/OIP.2sUG2Oo4Kl-Tgi6M1gyefwHaHa?w=203&h=203&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
    document.getElementById("paper-img").alt = "Paper Image";
    document.getElementById("paper-img").width = 100;
    document.getElementById("paper-img").height = 100;
    document.getElementById("paper-img").style.display = "block";
}
function createScissorsImage() {
    document.getElementById("scissors-img").src = "https://th.bing.com/th/id/OIP.iSGz4c9LX3FoQhfRJN-W6gHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
    document.getElementById("scissors-img").alt = "Scissors Image";
    document.getElementById("scissors-img").width = 100;
    document.getElementById("scissors-img").height = 100;
    document.getElementById("scissors-img").style.display = "block";
}
function createOpponentImage(choice) {
    if (choice === "rock") {
        document.getElementById("opponent-choice-img").src = "https://thumbs.dreamstime.com/b/cartoon-rock-illustration-design-automotive-fans-white-background-cartoon-illustration-featuring-large-rock-322723360.jpg";
        document.getElementById("opponent-choice-img").alt = "Rock Image";
        document.getElementById("opponent-choice-img").width = 100;
        document.getElementById("opponent-choice-img").height = 100;

    } else if (choice === "paper") {
        document.getElementById("opponent-choice-img").src = "https://th.bing.com/th/id/OIP.2sUG2Oo4Kl-Tgi6M1gyefwHaHa?w=203&h=203&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
        document.getElementById("opponent-choice-img").alt = "Paper Image";
        document.getElementById("opponent-choice-img").width = 100;
        document.getElementById("opponent-choice-img").height = 100;
    } else if (choice === "scissors") {
        document.getElementById("opponent-choice-img").src = "https://th.bing.com/th/id/OIP.iSGz4c9LX3FoQhfRJN-W6gHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
        document.getElementById("opponent-choice-img").alt = "Scissors Image";
        document.getElementById("opponent-choice-img").width = 100;
        document.getElementById("opponent-choice-img").height = 100;
    }
    document.getElementById("opponent-choice-img").style.display = "block";
}