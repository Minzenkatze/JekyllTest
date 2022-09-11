const ranColor = function () {
  const colors = ["cyan", "blue", "yellow", "red", "rgb(" + 0 + "," +  26 + "," + 83 + ")"];
  const randomIndex = Math.floor(Math.random()*colors.length);
  const chosen = colors[randomIndex];
  document.querySelector(".main-content").style.backgroundColor = chosen;
  console.log('The user clicked and set the background color to ' + chosen);
}

/*
window.onload = function (){
  const par = document.createElement("p");
  const node = document.createTextNode("I loaded");
  par.appendChild(node);
  document.querySelector(".main-content").appendChild(par);
  console.log("I loaded");
}
*/

//Tic-Tac-Toe
let turns = 0;
let gameOver = false;
const wincons = [
  [0,1,2], [3,4,5], [6,7,8], 
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];
const board = document.querySelector("#tic-tac-toe-board");

let winner = document.querySelector("#winner");

function makeMove(){
  if (gameOver === true){
    return;
  }
  if (!this.innerText){
    this.innerText = turns % 2 == 0 ? "X" : "O";
  }
  turns++;
  if (turns > 4){
    for (comb of wincons){
      if (fields[comb[0]].innerText !== "" && fields[comb[0]].innerText === fields[comb[1]].innerText && fields[comb[0]].innerText === fields[comb[2]].innerText){
        winner.innerText = fields[comb[0]].innerText + " won!";
        gameOver = true;
        return;
      }
    }
  } 
  if (turns === 9){
    winner.innerText = "Draw!";
    gameOver = true;
  }  
}

let fields = document.querySelectorAll("#tic-tac-toe-board td");
fields.forEach(field => {
    field.addEventListener("click", makeMove);
});

function resetBoard(){
  fields.forEach(field => {
    field.innerText = "";
    turns = 0;
    gameOver = false;
    winner.innerText = "";
  });
}


