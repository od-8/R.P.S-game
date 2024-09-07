let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
const message = document.getElementById('win/lose');
const computerChoice = document.getElementById('computer-choice')

function rockFunction () {
    let randomNum = Math.floor(Math.floor(Math.random() * 4));
    if (randomNum == 1 ) {
        computerChoice.textContent = "Paper";
        message.textContent = "You lose";
    } else if (randomNum == 2 ) {
        computerChoice.textContent = "Rock";
        message.textContent = "Draw";
    } else {
        computerChoice.textContent = "Scissors";
        message.textContent = "You win";
    }
}
function paperFunction () {
    let randomNum = Math.floor(Math.floor(Math.random() * 4));
    if (randomNum == 1 ) {
        computerChoice.textContent = "Scissors";
        message.textContent = "You lose";
    } else if (randomNum == 2 ) {
        computerChoice.textContent = "Paper";
        message.textContent = "Draw";
    } else {
        computerChoice.textContent = "Rock";
        message.textContent = "You win";
    }
}
function scissorsFunction () {
    let randomNum = Math.floor(Math.floor(Math.random() * 4));
    if (randomNum == 1 ) {
        computerChoice.textContent = "Rock";
        message.textContent = "You lose";
    } else if (randomNum == 2 ) {
        computerChoice.textContent = "Scissors";
        message.textContent = "Draw";
    } else {
        computerChoice.textContent = "Paper";
        message.textContent = "You win";
    }
}

rockBtn.addEventListener('click', rockFunction);
paperBtn.addEventListener('click', paperFunction);
scissorsBtn.addEventListener('click', scissorsFunction);