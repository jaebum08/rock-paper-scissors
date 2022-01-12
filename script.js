// Game Background
let playerScore = 0;
let frontManscore = 0;
let roundWinner = '';

function playGame(playerSelection,frontManSelection) {
    if (playerSelection === frontManSelection){
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'ROCK' && frontManSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && frontManSelection === "PAPER") || (playerSelection === "PAPER" && frontManSelection === "ROCK")
        ) {
            playerScore ++
            roundWinner = 'player'
        }
    
}