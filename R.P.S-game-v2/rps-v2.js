const options = ['rock', 'paper', 'scissors'];
const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const winner = document.getElementById('winner');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');

function playGame(playerChoice) {
    const randomChoice = options[Math.floor(Math.random() * 3)];
    let userNum = 0;
    let computerNum = 0;
    let result = "";
    if (playerChoice === randomChoice) {
        result = "IT'S A TIE!";
    } else {
        switch(playerChoice) {
            case "rock":
                if (randomChoice == "scissors") {
                    result = "YOU WIN!";
                    userNum++;
                } else {
                    result = "YOU LOSE!";
                    computerNum++;
                };
            break;
            case "paper":            
                if (randomChoice == "paper") {
                    result = "YOU WIN!";
                    userNum++;
                } else {
                    result = "YOU LOSE!";
                    computerNum++;
                };
            break;
            case "scissors":
                if (randomChoice == "scissors") {
                    result = "YOU WIN!";
                    userNum++;
                } else {
                    result = "YOU LOSE!";
                    computerNum++;
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