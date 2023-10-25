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
    /*else if (userChoice === 'ROCK' && computerSelection === 'Rock') {
        return 'Its a draw!! Play Again!';
    }*/
    else if (userChoice === 'PAPER' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock';
    }
    else if (userChoice === 'PAPER' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper';
    }
    /*else if (userChoice === 'PAPER' && computerSelection === 'Paper') {
        return 'Its a draw'
    }*/
    else if (userChoice === 'SCISSORS' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper';
    }
    else if (userChoice === 'SCISSORS' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors';
    }
    else {
        return 'Its a draw!! Play again!';
    }
}
