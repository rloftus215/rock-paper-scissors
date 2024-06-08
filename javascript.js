let humanScore = 0;
let computerScore = 0;


const buttonContainer = document.querySelector('.button-container')
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const choices = document.querySelector('.output');
const result = document.querySelector('.result');
const scores = document.querySelector('.scores');
const resetButton = document.createElement('button');

function getComputerChoice() {
    let number = Math.random();
    if (number >= 0 && number <= 0.33) {
        return 'rock';
    } else if (number >= 0.34 && number <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    };
};


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        result.textContent = 'Draw!';
    } else if(humanChoice !== computerChoice) {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        if (humanChoice === 'rock' && computerChoice === 'scissors'){
            humanScore++;
            result.textContent = 'you win, ' + humanChoice + ' beats ' + computerChoice;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            humanScore++;
            result.textContent = 'you win, ' + humanChoice + ' beats ' + computerChoice;
        } else if (humanChoice === 'paper' && computerChoice === 'rock'){
            humanScore++;
            result.textContent = 'you win, ' + humanChoice + ' beats ' + computerChoice;
        } else {
            computerScore++;
            result.textContent = 'you lose, ' + computerChoice + ' beats ' + humanChoice;
        }      
    }
    choices.innerText = 'computer choice: ' + computerChoice + '\n' + 
    'your choice: ' + humanChoice + '\n' 
    scores.innerText = 'Your score: ' + humanScore + " | " + 'Computer score: ' + computerScore;
    
    if (computerScore >= 3 || humanScore >= 3) {
    choices.innerText = '';
    
    if (computerScore > humanScore) {
        result.textContent = 'You lost!'
    } else if (humanScore > computerScore) {
        result.textContent = 'You win!'
    } else {
        result.textContent = 'Draw!'
    }

    resetButton.textContent = 'reset'
    buttonContainer.appendChild(resetButton)
    }
};

resetButton.addEventListener('click', () => {
    location.reload()
    })


rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

