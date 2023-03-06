const options=["rock","paper","scissors"];
let player_points=0;
let computer_points=0;
function getComputerChoice(){

  let choice = options[Math.floor(Math.random()*options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
    

    if(playerSelection=="rock"&&computerSelection=="scissors"||
      playerSelection=="scissors"&&computerSelection=="paper"||
      playerSelection=="paper"&&computerSelection=="rock")return player_points++,console.log("You win!");
    else if(playerSelection==computerSelection) return console.log("It's a tie!!")
    else return computer_points++,console.log("You Lose!");

  }
function game(){

    for (let i = 0; i < 5; i++) {
        let playerSelection=prompt("Input rock,paper or scissors.").toLowerCase();
        let computerSelection=getComputerChoice();
        playRound(playerSelection, computerSelection);
     }
    if(player_points>computer_points)console.log("You won!!!")
    else console.log("You lost!!!");
  }
game();
   
 