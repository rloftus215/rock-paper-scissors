let humanScore = 0;
let computerScore = 0;


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


function getHumanChoice() {
    let choice = prompt('enter a value (rock, paper or scissors) to play').toLowerCase();


    if (choice === 'rock') {
        return 'rock';
    } else if (choice === 'paper') {
        return 'paper';
    } else if (choice === 'scissors') {
        return 'scissors';
    } else {
        return '';
    };
};


function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        return 'Draw!';
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        computerScore++;
        return 'you lose, paper beats rock';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        humanScore++;
        return 'you win, rock beats scissors';
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        return 'Draw!';
     } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        humanScore++;
        return 'you win, paper beats rock';
     } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        computerScore++;
        return 'you lose, scissors beats paper';
     } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        computerScore++;
        return 'you lose, rock beats scissors';
     } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        humanScore++;
        return 'you win, scissors beats paper';
     } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        return 'Draw!';
     } else {
        alert('enter a valid value');
     }
};


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log(playRound(humanSelection, computerSelection));
