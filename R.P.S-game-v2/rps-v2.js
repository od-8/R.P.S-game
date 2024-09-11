const options = ['rock', 'paper', 'scissors'];
const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const winner = document.getElementById('winner');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');

let userNum = 0;
let computerNum = 0;

function playGame(playerChoice) {
    const randomChoice = options[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === randomChoice) {
        result = "IT'S A TIE!";
    } else {
        switch(playerChoice) {
            case "rock":
                if (randomChoice == "scissors") {
                    result = "YOU WIN!";
                    userNum++;
                    userScore.textContent = `Your score: ${userNum}`;
                } else {
                    result = "YOU LOSE!";
                    computerNum++;
                    computerScore.textContent = `Computer score: ${computerNum}`;
                };
            break;
            case "paper":            
                if (randomChoice == "rock") {
                    result = "YOU WIN!";
                    userNum++;
                    userScore.textContent = `Your score: ${userNum}`;
                } else {
                    result = "YOU LOSE!";
                    computerNum++;
                    computerScore.textContent = `Computer score: ${computerNum}`;
                };
            break;
            case "scissors":
                if (randomChoice == "paper") {
                    result = "YOU WIN!";
                    userNum++;
                    userScore.textContent = `Your score: ${userNum}`;
                } else {
                    result = "YOU LOSE!";
                    computerNum++;
                    computerScore.textContent = `Computer score: ${computerNum}`;
                };
            break;
        }
    }
    userChoice.textContent = `PLAYER: ${playerChoice}`;
    computerChoice.textContent = `COMPUTER: ${randomChoice}`;
    winner.textContent = result;
    userScore.textContent = userNum;
    computerScore.textContent = computerNum;
}