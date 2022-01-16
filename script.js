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
    if (
        (frontManSelection === 'ROCK' && playerSelection === 'SCISSORS') || (frontManSelection === 'SCISSORS' && playerSelection === "PAPER") || (frontManSelection === "PAPER" && playerSelection === "ROCK")
    ){
        frontManscore ++;
        roundWinner = 'front man'
    }
    
    updateScoreMessage (roundWinner, playerSelection, frontManSelection);
};

function getRandomSelection() {
    let randomNumber  = Math.floor(Math.random() * 3)
    console.log(randomNumber)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
};

function isGameOver() {
    return playerScore === 5 || frontManscore === 5;
};

// UI, grabbing all the data

const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const playerSign = document.getElementById("playerSign");
const frontManSign = document.getElementById("frontManSign");
const playerScoreShow = document.getElementById("playerScore");
const frontManScoreShow = document.getElementById("frontManScore");

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const endGameModal = document.getElementById('endGameModal');
const endgameMsg = document.getElementById('endMsg');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn')

// event listeners and action

rockBtn.addEventListener('click', () => handleClick("ROCK"))
paperBtn.addEventListener('click', () => handleClick("PAPER"))
scissorsBtn.addEventListener('click', () => handleClick("SCISSORS"))
restartBtn.addEventListener('click',restartGame);
overlay.addEventListener('click', closeEndGameModal);

function handleClick(playerSelection) {
    if (isGameOver()) {
        openEndGameModal()
        return
    }

    const frontManSelection = getRandomSelection();
    playGame(playerSelection,frontManSelection)
    updateChoices(playerSelection,frontManSelection);
    updateScore()

    if (isGameOver()) {
        openEndGameModal()
        setFinalMsg()
    }
}

function updateChoices(playerSelection,frontManSelection) {
    switch (playerSelection) {
        case "ROCK":
            // var img = document.createElement('img');
            // img.src = './images/circle.png';
            // playerSign.innerHTML="<img src=./images/circle.png>";
            playerSign.textContent = '✊'
            break
        case "PAPER":
            playerSign.textContent = '✋'
            break
        case "SCISSORS":
            playerSign.textContent = "✌"
            break
    }

    switch (frontManSelection) {
        case "ROCK":
            frontManSign.textContent = '✊'
            break
        case "PAPER":
            frontManSign.textContent = '✋'
            break
        case "SCISSORS":
            frontManSign.textContent = "✌"
            break
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It is a TIE!";
    } else if (roundWinner === "player") {
        scoreInfo.textContent = "You Won";
    } else if (roundWinner === "front man") {
        scoreInfo.textContent = "You lost"
    }

    playerScoreShow.textContent = `Player: ${playerScore}`
    frontManScoreShow.textContent = `Front Man: ${frontManscore}`
}

function updateScoreMessage(winner, playerSelection,frontManSelection) {
    if (winner === 'player') {
        scoreMessage.textContent =`${playerSelection} beats ${frontManSelection}`
        return
    }
    if (winner === 'front man') {
        scoreMessage.textContent = `${playerSelection} loses to ${frontManSelection}`
        return
    }
    scoreMessage.textContent = `${playerSelection} ties with ${frontManSelection}`
}

function openEndGameModal() {
    endGameModal.classList.add('active');
    overlay.classList.add('active');
}

function closeEndGameModal() {
    endGameModal.classList.remove('active');
    overlay.classList.remove('active');
}

function setFinalMsg() {
    return playerScore > frontManscore 
        ? (endgameMsg.textContent = "You Won 4.56 Million Dollars")
        : (endgameMsg.textContet = "You lost to the Front Man ...")
}

function restartGame() {
    playerScore = 0;
    frontManscore =0;
    scoreInfo.textContent = "Rock Paper Scissors (Squid Game Version)";
    scoreMessage.textContent = "First to score 5 points wins the game";
    playerScoreShow.textContent = "Player: 0";
    frontManScoreShow.textContent = "Front Man: 0";
    playerSign.textContent = "?";
    frontManSign.textContent = "?";
    endGameModal.classList.remove('active');
    overlay.classList.remove('active');
}

