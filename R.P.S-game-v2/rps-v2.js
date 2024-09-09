let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
const message = document.getElementById('win/lose');
const computerChoice = document.getElementById('computer-choice')
let urchoice = document.getElementById('urchoice')

function rockFunction () {
    let randomNum1 = Math.floor(Math.floor(Math.random() * 3));
    const options = ['Rock', 'Paper', 'Scissors']
    let randomOption = options[randomNum1]
        console.log(randomOption)
    /*  
    let randomNum2 = Math.floor(Math.floor(Math.random() * 4) + 3);
    let randomNum3 = Math.floor(Math.floor(Math.random() * 4) + 6);

    if (randomNum1 == 1 ) {
        computerChoice.textContent = "Paper";
        message.textContent = "You lose";
    } else if (randomNum == 2 ) {
        computerChoice.textContent = "Rock";
        message.textContent = "Draw";
    } else {
        computerChoice.textContent = "Scissors";
        message.textContent = "You win";
    }
    if (randomNum2 == 5) {
        computerChoice.textContent = "Scissors";
        message.textContent = "You lose";
    } else if (randomNum == 6) {
        computerChoice.textContent = "Paper";
        message.textContent = "Draw";
    } else {
        computerChoice.textContent = "Rock";
        message.textContent = "You win";
    }
    if (randomNum3 == 1 ) {
        computerChoice.textContent = "Rock";
        message.textContent = "You lose";
    } else if (randomNum == ) {
        computerChoice.textContent = "Scissors";
        message.textContent = "Draw";
    } else {
        computerChoice.textContent = "Paper";
        message.textContent = "You win";
    } */
    
    if (randomOption == rockBtn.textContent || randomOption == scissorsBtn.textContent || randomOption == paperBtn.textContent) {
        message.textContent = "Draw";
        computerChoice.textContent = randomOption;
        //console.log(randomOption)
    } else if (randomOption != scissorsBtn.textContent) {
        message.textContent = "L u lose"
    }
    //console.log(rockBtn.textContent)
}

rockBtn.addEventListener('click', rockFunction);
paperBtn.addEventListener('click', rockFunction);
scissorsBtn.addEventListener('click', rockFunction);