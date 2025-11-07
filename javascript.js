function getComputerChoice() {
    let decision = Math.floor(Math.random() * 3);
    switch(decision) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    let input = prompt("Would you like to choose rock, paper or scissors: ")
    return input.toLowerCase()
}

function playGame(numRounds) {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("A draw!");
        } else
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore += 1;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore += 1;
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    for (i = 1; i<= numRounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice)
    }

    if (humanScore > computerScore) {
        console.log(`You win! The final score is ${humanScore}:${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`You lose! The final score is ${humanScore}:${computerScore}`)
    } else {
        console.log(`It's a draw! The final score is ${humanScore}:${computerScore}`)
    }
}

playGame(5);
