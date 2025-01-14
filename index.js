const options =  ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "Look At That! It's A Tie!";
    } else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Display result on the page
function displayMessage(message) {
    const resultDiv = document.getElementById("result");
    const p = document.createElement("p");
    p.textContent = message;
    resultDiv.appendChild(p);
}

// Function for handling each round of the game when a button is clicked
function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    displayMessage(`You chose: ${playerSelection} | Computer chose: ${computerSelection} | ${result}`);

    if (result.includes("You win!")) {
        scorePlayer++;
    } else if (result.includes("You lose!")) {
        scoreComputer++;
    }

    // Display the current score
    displayMessage(`Player Score: ${scorePlayer} | Computer Score: ${scoreComputer}`);

    // End the game after 5 rounds
    if (scorePlayer + scoreComputer === 5) {
        displayMessage("GAME OVER!!");
        if (scorePlayer > scoreComputer) {
            displayMessage("Player Won!");
        } else if (scoreComputer > scorePlayer) {
            displayMessage("Computer Won!");
        } else {
            displayMessage("It's a tie!");
        }

        // Reset game for next play
        scorePlayer = 0;
        scoreComputer = 0;
    }
}
