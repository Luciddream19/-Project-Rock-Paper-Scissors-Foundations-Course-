// console.log("Hello World!");

function getComputerChoice() {
  const value = Math.random();
  if (value < 0.3333) {
    return "rock";
  } else if (value > 0.3333 && value <= 0.6666) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let value = prompt("Rock, Paper, Scissors?!").toLowerCase();
  if (value === "rock") {
    return "rock";
  } else if (value === "paper") {
    return "paper";
  } else if (value === "scissors") {
    return "scissors";
  } else {
    alert("Incorrect input!!!");
  }
}
let humanScore = 0;
let computerScore = 0;
function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log(`You win!!!, ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else {
      console.log(`You lose!!!, ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }

  for (let i = 0; i < 5; i++) {
    console.log(`\n*** Round ${i + 1} ***`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (
      humanSelection === "rock" ||
      humanSelection === "paper" ||
      humanSelection === "scissors"
    ) {
      playRound(humanSelection, computerSelection);
    } else {
      console.log(
        "Invalid choice entered. Skipping round or defaulting to a loss."
      );
    }
  }

  console.log("\n--- Game Over! Final Results ---");
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("**CONGRATULATIONS! You are the overall winner!** 🏆");
  } else if (computerScore > humanScore) {
    console.log("**BETTER LUCK NEXT TIME! The computer wins the game!** 🤖");
  } else {
    console.log("**It's a GENTLEMAN'S DRAW!** 🤝");
  }
}

playGame();
