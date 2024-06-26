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

// Get user's choice
function getHumanChoice() {
  return prompt("Rock, Paper, Scissors!");
}

//Game loop
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    humanSelection = humanSelection.toLowerCase();
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

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
  }
}

playGame();