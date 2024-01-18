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

function singleRoundOfRPS (playerChoice, computerSelection = getComputerChoice()) {
    playerSelection = /*prompt('Enter Rock, Paper or Scissors:', '')*/playerChoice.toUpperCase();
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
        return prompt('Enter Rock, Paper or Scissors:', '');
    }
    else {
        ++draw;
        return 'Its a draw!! Play again!';
    }
}

/*function game() {
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

console.log(game());*/

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let score = document.querySelector('#score');
let outcome = document.querySelector('#outcome');

document.body.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'rock':
            singleRoundOfRPS('rock');
            score.textContent = `You have won: ${win}, You have lost: ${lose}, Draw: ${draw}`;
            break;
        case 'paper':
            singleRoundOfRPS('paper');
            score.textContent = `You have won: ${win}, You have lost: ${lose}, Draw: ${draw}`;
            break;
        case 'scissors':
            singleRoundOfRPS('scissors');
            score.textContent = `You have won: ${win}, You have lost: ${lose}, Draw: ${draw}`;
            break;    
    }
    if (win === 5) {
        outcome.textContent = "You have won the game! Well done!";
        win = 0;
        lose = 0;
        draw = 0;
    }
    else if (lose === 5) {
        outcome.textContent = "You have lost the game... :(";
        win = 0;
        draw = 0;
        lose = 0;
    }
});

