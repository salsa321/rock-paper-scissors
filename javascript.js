function getComputerChoice () {
    let random = Math.random();
    if (random <= 0.3333) {
        return console.log('Rock');
    }
    else if (random > 0.3333 && random < 0.6666 ) {
        return console.log('Paper');
    }
    else {
        return console.log('Scissors');
    }
}

console.log(getComputerChoice());