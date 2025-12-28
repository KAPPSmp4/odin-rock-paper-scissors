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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        feedback.textContent = "A draw!";
        score.textContent = `${humanScore} vs ${computerScore}`;
    } else
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        feedback.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
        score.textContent = `${humanScore} vs ${computerScore}`
    } else {
        feedback.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
        score.textContent = `${humanScore} vs ${computerScore}`
    }
}


let humanScore = 0;
let computerScore = 0;
const score = document.querySelector("#scoreboard");
score.textContent = `${humanScore} vs ${computerScore}`;

const feedback = document.querySelector("p");


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    if (humanScore == 5) {feedback.textContent = "WINNER!"; rockBtn.remove(); paperBtn.remove(); scissorBtn.remove()}
    if (computerScore == 5) {feedback.textContent = "LOOOSER!"; rockBtn.remove(); paperBtn.remove(); scissorBtn.remove()}
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    if (humanScore == 5) {feedback.textContent = "WINNER!"; rockBtn.remove(); paperBtn.remove(); scissorBtn.remove()}
    if (computerScore == 5) {feedback.textContent = "LOOOSER!"; rockBtn.remove(); paperBtn.remove(); scissorBtn.remove()}
});

scissorBtn.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
    if (humanScore == 5) {feedback.textContent = "WINNER!"; rockBtn.remove(); paperBtn.remove(); scissorBtn.remove()}
    if (computerScore == 5) {feedback.textContent = "LOOOSER!"; rockBtn.remove(); paperBtn.remove(); scissorBtn.remove()}
});
