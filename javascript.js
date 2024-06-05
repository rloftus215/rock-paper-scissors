function getComputerChoice() {
    let number = Math.random();
    if (number >= 0 && number <= 0.33) {
        console.log('Computer: rock');
    } else if (number >= 0.34 && number <= 0.66) {
        console.log('Computer: paper');
    } else {
        console.log('Computer: scissors');
    };
 };

 function getHumanChoice() {
    let humanChoice = prompt('Type a choice (Rock, paper or scissors) to play');
 
 
    if (humanChoice === 'rock') {
        console.log('Your choice: rock');
    } else if (humanChoice === 'paper') {
        console.log('Your choice: paper');
    } else {
        console.log('Your choice: scissors');
    };
 };
 
 