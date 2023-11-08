let win = 0;
let lose = 0;
let draw = 0;

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
        ++win;
        return  'You win! Rock beats Scissors';
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'Paper') {
        ++lose;
        return 'You lose! Paper beats Rock';
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'Rock') {
        ++win;
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'Scissors') {
        ++lose;
        return 'You lose! Scissors beats Paper';
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'Paper') {
        ++win;
        return 'You win! Scissors beats Paper';
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'Rock') {
        ++lose;
        return 'You lose! Rock beats Scissors';
    }
    else if (playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS') {
        console.log('Please enter either Rock, Paper or Scissors')
        return singleRoundOfRPS();
    }
    else {
        ++draw;
        return 'Its a draw!! Play again!';
    }
}

function game() {
    console.log(singleRoundOfRPS());
    console.log(singleRoundOfRPS());
    console.log(singleRoundOfRPS());
    console.log(singleRoundOfRPS());
    console.log(singleRoundOfRPS());
    if (win > 2) {
        return "Congratulations! You have won the game!";
    }
    else if (lose > 2) {
        return "Unlucky - You have lost...Try again.";
    }
    else if (draw > 2) {
        return "It's a tie-game! Please play again.";
    }
    else {
        return "It's a tie-game! Please play again.";
    }                  
}

console.log(game());
