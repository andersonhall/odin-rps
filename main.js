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

const getHumanChoice = () => {
  const choice = prompt(
    "Enter your choice... Rock = r, Paper = p, Scissors = s"
  );
  if (choice === "r") {
    return "rock";
  } else if (choice === "p") {
    return "paper";
  } else if (choice === "s") {
    return "scissors";
  }
};

const playGame = (numberOfRoundsToPlay) => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else if (humanChoice === computerChoice) {
      console.log(`It's a tie!`);
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
  };

  for (let i = 0; i < numberOfRoundsToPlay; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
};

playGame(5);
