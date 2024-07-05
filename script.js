/* Written by Aaron Pang, June 24th, 2024 */

// Randomly generate a number to decide rock, paper, or scissors
function getComputerChoice() {
  let val = Math.random();
  // Divide random gen number into three equal parts to get random choice
  console.log(val);
  if (val >= 0.66) {
    return "rock";
  }
  if (val >= 0.33) {
    return "paper"
  }
  return "scissors";
}

//Game loop
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    switch(humanSelection) {
      case "rock":
        if (computerSelection == "paper") {
          console.log("You lose! Paper beats Rock");
          computerScore++;
        }
        else if (computerSelection == "rock") {
          console.log("Tie! Rock draws with Rock");
        }
        else {
          console.log("You win! Rock beats scissors");
          humanScore++;
        }
        break;
      case "paper":
        if (computerSelection == "paper") {
          console.log("Tie! Paper draws with Paper");
        }
        else if (computerSelection == "rock") {
          console.log("You win! Paper beats rock");
          humanScore++;
        }
        else {
          console.log("You lose! Scissors beats paper");
          computerScore++;
        }
        break;
      case "scissors":
        if (computerSelection == "paper") {
          console.log("You win! Scissors beats paper");
          humanScore++;
        }
        else if (computerSelection == "rock") {
          console.log("You lose! Rock beats scissors");
          computerScore++;
        }
        else {
          console.log("Tie! Scissors draws with scissors");
        }
        break;
      default:
        console.log("Bad input");
        break; 
    }
  }

  const body = document.querySelector("body");
  const scoreContainer = document.createElement("div");

  let yourScore = document.createElement("div");
  yourScore.textContent = "human score: " + humanScore;

  let theirScore = document.createElement("div");
  theirScore.textContent = "computer score: " + computerScore;

  scoreContainer.appendChild(yourScore);
  scoreContainer.appendChild(theirScore);
  body.appendChild(scoreContainer);
  
  const updateScore = () => {
    yourScore.textContent = "human score: " + humanScore;
    theirScore.textContent = "computer score: " + computerScore;

    if (humanScore == 5) alert("human wins!");
    if (computerScore == 5) alert("computer wins!");
  }

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch(true) {
        case button.classList == "rock":
          playRound("rock", getComputerChoice());
          break;
        case button.classList == "paper":
          playRound("paper", getComputerChoice());
          break;
        case button.classList == "scissors":
          playRound("scissors", getComputerChoice());
          break;
        default:
          break;
      }
      updateScore();
    })});
}

playGame();