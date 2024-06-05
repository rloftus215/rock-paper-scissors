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
 