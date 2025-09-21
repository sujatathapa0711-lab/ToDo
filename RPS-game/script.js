function playGame(userChoice) {
  // Array of choices
  const choices = ["rock", "paper", "scissors"];

  // Computer random choice
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Display choices
  document.getElementById("user-choice").textContent = "Your Choice: " + userChoice;
  document.getElementById("computer-choice").textContent = "Computer’s Choice: " + computerChoice;

  let result = "";

  // Game logic
  if (userChoice === computerChoice) {
    result = "It's a Tie! 🤝";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win! 🎉";
  } else {
    result = "Computer Wins! 😟";
  }

  // Show result
  document.getElementById("winner").textContent = "Result: " + result;
}
