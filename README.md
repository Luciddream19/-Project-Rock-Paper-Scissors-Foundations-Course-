# -Project-Rock-Paper-Scissors-Foundations-Course-

The is a odin project of the game Rock,Paper, Scissor using javascipt and executed on the console in a browser.
The game is built to play between Human against Computer; A game of 5 round with the scores for each round also diplayed on the browser console.

// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
// Math.random() returns a number between 0 (inclusive) and 1 (exclusive)
const randomNumber = Math.random();

// Divide the 0-1 range into three equal parts:
// 0 <= randomNumber < 1/3 -> "rock"
// 1/3 <= randomNumber < 2/3 -> "paper"
// 2/3 <= randomNumber < 1 -> "scissors"

if (randomNumber < 1 / 3) {
return "rock";
} else if (randomNumber < 2 / 3) {
return "paper";
} else {
return "scissors";
}
}

// console.log(getComputerChoice()); // Test the function

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
// Use prompt to get the user's input
// Note: For now, we assume the user enters a valid choice ("rock", "paper", or "scissors")
let humanChoice = prompt("Enter your choice: rock, paper, or scissors:");

// Basic validation/cleaning (though the prompt only asks for valid input)
if (humanChoice) {
// Convert to lowercase for easier comparison later
return humanChoice.toLowerCase();
}
return "invalid"; // Return "invalid" or similar if prompt is canceled/empty, just for safety
}

// console.log(getHumanChoice()); // Test the function

// Step 6: Write the logic to play the entire game
function playGame() {
// Step 4: Declare the players score variables (inside playGame as requested in Step 6)
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round (defined inside playGame as requested in Step 6)
function playRound(humanChoice, computerChoice) {
// Make humanChoice case-insensitive by converting to lowercase
const normalizedHumanChoice = humanChoice.toLowerCase();

    console.log(`\nHuman chooses: ${normalizedHumanChoice}`);
    console.log(`Computer chooses: ${computerChoice}`);

    let roundResult = "";

    // Check for a tie
    if (normalizedHumanChoice === computerChoice) {
      roundResult = "It's a tie!";
    }
    // Check for human win conditions
    else if (
      (normalizedHumanChoice === "rock" && computerChoice === "scissors") ||
      (normalizedHumanChoice === "paper" && computerChoice === "rock") ||
      (normalizedHumanChoice === "scissors" && computerChoice === "paper")
    ) {
      roundResult = `You win! ${normalizedHumanChoice} beats ${computerChoice}`;
      humanScore++; // Increment score
    }
    // All other cases are computer wins
    else {
      roundResult = `You lose! ${computerChoice} beats ${normalizedHumanChoice}`;
      computerScore++; // Increment score
    }

    console.log(roundResult);
    console.log(
      `Current Score: Human: ${humanScore}, Computer: ${computerScore}`
    );

}
// --- End of playRound function definition ---

// Play 5 rounds
console.log("--- Game Start: Best of 5 Rounds! ---");

for (let i = 0; i < 5; i++) {
console.log(`\n*** Round ${i + 1} ***`);

    // Get new choices for each round
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // Ensure the choice is somewhat valid before playing the round
    // (A full validation loop is beyond the scope of the current steps)
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
      // Optional: you could increment computer score or just skip.
      // For simplicity based on the prompt's instructions to assume valid input,
      // we'll just log an issue and continue.
      // To strictly adhere to the prompt, we'd assume a valid choice was entered here.
    }

}

// Declare the final winner after 5 rounds
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

// Call the function to start the game!
playGame();
