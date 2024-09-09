let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
const message = document.getElementById('win/lose');
const computerChoice = document.getElementById('computer-choice')
let urchoice = document.getElementById('urchoice')

function rockFunction () {
    let randomNum1 = Math.floor(Math.floor(Math.random() * 3));
    const options = ['Rock', 'Paper', 'Scissors'];
    let randomOption = options[randomNum1];
    let userInput = rockBtn && paperBtn && scissorsBtn;
    
    /* if ( (randomOption == "Rock" && rock) || (randomOption == "Scissors" && scissors) || (randomOption == "Paper" && paper) ) {
        computerChoice.textContent = randomOption
        message.textContent = "Draw";
    } else if ((randomOption == "Rock" && scissors) || (randomOption == "Scissors" && paper) || (randomOption == "Paper" && rock)) {
        computerChoice.textContent = randomOption
        message.textContent = "U win";
    }  */

   if ( (randomOption == "Rock" && rock == true) || (randomOption == "Scissors" && scissors == true) || (randomOption == "Paper" && paper == true) ) {
        computerChoice.textContent = randomOption
        message.textContent = "Draw";
    } else if ((randomOption == "Rock" && scissors == true) || (randomOption == "Scissors" && paper == true) || (randomOption == "Paper" && rock == true)) {
        computerChoice.textContent = randomOption
        message.textContent = "U win";
    }  
}

rockBtn.addEventListener('click', rockFunction);
paperBtn.addEventListener('click', rockFunction);
scissorsBtn.addEventListener('click', rockFunction);

let rock = rockBtn.addEventListener('click', () => {});
let paper = paperBtn.addEventListener('click', () => {});
let scissors = scissorsBtn.addEventListener('click', () => {});