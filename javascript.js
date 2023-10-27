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
    playerSelection = prompt('Enter Rock, Paper or Scissors:', '').toUpperCase();
    if (playerSelection === 'ROCK' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors';
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock';
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper';
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper';
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors';
    }
    else if (playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS') {
        return 'Please enter either Rock, Paper or Scissors';
    }
    else {
        return 'Its a draw!! Play again!';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let win = 0;
        let lose = 0;
        let draw = 0;
        console.log (singleRoundOfRPS());
        if (singleRoundOfRPS() === 'You win! Rock beats Scissors'
        || singleRoundOfRPS() === 'You win! Paper beats Rock' 
        || singleRoundOfRPS() === 'You win! Scissors beats Paper') {
            win = ++win;
        }
        else if (singleRoundOfRPS() === 'You lose! Paper beats Rock'
        || singleRoundOfRPS() === 'You lose! Scissors beats Paper' 
        || singleRoundOfRPS() === 'You lose! Rock beats Scissors') {
            lose = ++lose;
        }
        else if (singleRoundOfRPS() === 'Its a draw!! Play again!') {
            draw = ++draw;
        }
        (function () {
            if (i === 4 && win > 2) {
                return "Congratulations! You've won the game.";
            }
            else if (i === 4 && lose > 2) {
                return "Unlucky :( - You've lost, try again.";
            }
            else if (i === 4 && draw > 2) {
                return "It's a draw! - play again.";
            }
        });    
        /*if (win > 2) {
            return "Congratulations! You've won the game";
        }
        else if (lose > 2) {
            return "Unlucky :( - You've lost, try again";
        }
        else {
            return "It's a draw! - Play again.";
        }*/
    }
}

console.log();
