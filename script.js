const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || "paper" || "scissors") {
    return userInput;
  } else {
    console.log("Please choose between rock, paper or scissors");
  }
};

const getComputerChoise = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoise, computerChoise) => {
  if (userChoise === computerChoise) {
    return `The game was a tie!🙀`;
  }
  if (userChoise === "rock") {
    if (computerChoise === "paper") {
      return `The computer won! 🏆`;
    } else {
      return `The human user won! 🏆`;
    }
  }

  if (userChoise === "paper") {
    if (computerChoise === "scissors") {
      return `The computer won! 🏆`;
    } else {
      return `The human user won! 🏆`;
    }
  }

  if (userChoise === "scissors") {
    if (computerChoise === "rock") {
      return `The computer won! 🏆`;
    } else {
      return `The human user won! 🏆`;
    }
  }
};

function playGame() {
  let userChoise = getUserChoice("rock");
  let computerChoise = getComputerChoise();
  console.log(`Human user choose:${userChoise}`);
  console.log(`The computer choose:${computerChoise}`);
  console.log(determineWinner(userChoise, computerChoise));
}

playGame();
console.log("end of program");
