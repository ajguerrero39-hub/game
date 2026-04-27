# Rock-Paper-Scissors
May 3rd 2026
### by Anthony Guerrero

## User Story
*As a game player*

*I want to play Rock, Paper, Scissors*

*So that I can have fun*

>This program simulates a game of Rock, Paper, Scissors.
>I chose this to improve because it is my favorite of the programs I made this semester
>TBD
>TBD

Made with W3Schools

[Source Code](https://github.com/ajguerrero39-hub/game)

[Game](https://ajguerrero39-hub.github.io/game/)

[Github Profile](https://github.com/ajguerrero39-hub)

[Nu Validation](https://validator.nu/?doc=https%3A%2F%2Fajguerrero39-hub.github.io%2Fgame%2F)

[WAVE Validation](https://accessibe.com/accessscan?website=https://ajguerrero39-hub.github.io/game/)

## Wireframe ##
<img width = "1000" height = 10000 src = https://github.com/ajguerrero39-hub/game/blob/238128706764599a43f3e7dcf1571f7fde3c4d4a/images/IMG_20260327_163515543_AE.jpg/>

## Game ScreenShot ##
<img width = "1000" height = "10000" src = https://github.com/ajguerrero39-hub/game/blob/0bf583f1c369d3e1f3cba86ea53d2c1d6c105ad5/images/Screenshot%202026-04-09%20185756.png/>

## Code Sample

This is the main driver for the game
First, the opponent's choice is generated.
```js
var opponentChoice = opponentChoices[Math.floor(Math.random() * opponentChoices.length)];
    console.log("Opponent's choice: " + opponentChoice);
    createOpponentImage(opponentChoice);
```
Next, the program checks if the player made their own choice.
```js
 if (!playChoice) {
        console.log("Please make a choice before starting the game.");
        document.getElementById("result").innerHTML = "Please make a choice before starting the game.";
        return;
    }
```
Assuming the player is participating in this game, the program checks to see if the player wins or loses
```js
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
```
The game then clears the player's choice, and loops again.

