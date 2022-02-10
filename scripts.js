console.log('Have fun!');
let gameNumber = 0;
let playerWin = 0;
let computerWin = 0;

//Computer makes random rock, paper or scissors selection
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Player feedback and format
function playerFeedback () {
  //Prompt Player for their selection
  let playerInput = prompt("Let's play rock, paper, scissors.  Which do you choose?");
  let playerInputLower = playerInput.toLowerCase();
  return playerInputLower.charAt(0).toUpperCase() + playerInputLower.slice(1); 
}

//Function for finding winner
function playRound() {  
     //Game Number
     gameNumber++;
     console.log(`Game ${gameNumber}`);

    //Computer and Player Selections
    const playerSelection = playerFeedback();
    console.log(`The Player chose: ${playerSelection}`);
    const computerSelection = computerPlay();
    console.log(`The Computer chose: ${computerSelection}`);

    //Figure out who wins the round
    if (playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper' ||
        playerSelection === 'Rock' && computerSelection === 'Scissors') {
            playerWin++;
        return `Player Wins! ${playerSelection} beats ${computerSelection}!`
    } else if  (computerSelection === 'Paper' && playerSelection === 'Rock' ||
                computerSelection === 'Scissors' && playerSelection === 'Paper' ||
                computerSelection === 'Rock' && playerSelection === 'Scissors') { 
            computerWin++;        
        return `Computer Wins! ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}!` 
    } else {
        return `You typed ${playerSelection}: thats not rock, paper or scissors.`
    } 
}

//Game Function with loop
function game() {
    for (i = 1; playerWin < 3 && computerWin < 3; i++) {
        playRound();
        console.log(`Score: Player: ${playerWin} Computer: ${computerWin}`);
    }
    if (playerWin === 3) {
        console.log(`Player wins ${playerWin} to ${computerWin}.`);
    }
    else if (computerWin === 3) {
        console.log(`Computer wins ${computerWin} to ${playerWin}.`);
    }
}

game();

