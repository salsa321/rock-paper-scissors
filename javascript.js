function getComputerChoice () {
    let random = Math.random();
    if (random <= 0.3333) {
        return ('Rock');
    }
    else if (random > 0.3333 && random < 0.6666 ) {
        return ('Paper');
    }
    else {
        return ('Scissors');
    }
}

function singleRoundOfRPS (playerSelection, computerSelection = getComputerChoice()) {
    let userChoice = playerSelection.toUpperCase();
    /*let computerSelection = getComputerChoice();*/
    if (userChoice === 'ROCK' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors';
    }
    else if (userChoice === 'ROCK' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock';
    }
    else if (userChoice === 'PAPER' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock';
    }
    else if (userChoice === 'PAPER' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper';
    }
    else if (userChoice === 'SCISSORS' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper';
    }
    else if (userChoice === 'SCISSORS' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors';
    }
    else if (userChoice !== 'ROCK' && userChoice !== 'PAPER' && userChoice !== 'SCISSORS') {
        return 'Please enter either Rock, Paper or Scissors';
    }
    else {
        return 'Its a draw!! Play again!';
    }
}

/*function game() {
    for (let i = 0; i < 5; i++) {
        console.log(prompt('Enter Rock, Paper or Scissors:', '');
        
            singleRoundOfRPS(prompt('Enter Rock, Paper or Scissors:', ''), computerSelection));
    }
}

/*console.log(game());*/

console.log (singleRoundOfRPS(prompt('Enter Rock, Paper or Scissors:', '')));