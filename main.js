const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

let humanScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const message = document.querySelector(".message");

const playRound = (humanChoice, computerChoice) => {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
    playerScoreDisplay.textContent = humanScore;
  } else if (humanChoice === computerChoice) {
    message.textContent = `It's a tie!`;
  } else {
    message.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }
  if (humanScore === 5) {
    message.textContent = "Human player wins!";
  }
  if (computerScore === 5) {
    message.textContent = "Computer player wins!";
  }
};

rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice())
);
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
