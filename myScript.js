const options=["Rock","Paper","Scissors"];
let player_points=0;
let computer_points=0;
function getComputerChoice(){

  let choice = options[Math.floor(Math.random()*options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
    

  const roundResult = document.getElementById("round-result");
  if(playerSelection=="Rock"&&computerSelection=="Scissors"||
    playerSelection=="Scissors"&&computerSelection=="Paper"||
    playerSelection=="Paper"&&computerSelection=="Rock") {
    player_points++;
    roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if(playerSelection==computerSelection) {
    roundResult.textContent = `It's a tie! You both chose ${playerSelection}.`;
  } else {
    computer_points++;
    roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}
function game() {
  const gameResult = document.getElementById("game-result");
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const computerSelection = getComputerChoice();
      playRound(button.id, computerSelection);
      updateScore();
      if (player_points == 5 || computer_points == 5) {
        endGame();
      }
    });
  });

  function updateScore() {
    document.getElementById("player-score").textContent = `Player: ${player_points}`;
    document.getElementById("computer-score").textContent = `Computer: ${computer_points}`;
  }

  function endGame() {
    buttons.forEach((button) => {
      button.disabled = true;
    });
    if (player_points > computer_points) {
      gameResult.textContent = `Congratulations! You won the game ${player_points} to ${computer_points}.`;
    } else {
      gameResult.textContent = `Sorry, you lost the game ${player_points} to ${computer_points}.`;
    }
  }
}
game();
   
 