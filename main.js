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
