const ranColor = function () {
  const colors = ["green", "blue", "yellow", "red", "rgb(" + 0 + "," +  26 + "," + 83 + ")"];
  const randomIndex = Math.floor(Math.random()*colors.length);
  const chosen = colors[randomIndex];
  document.querySelector("html").style.backgroundColor = chosen;
  console.log('The user clicked and set the background color to ' + chosen);
}

window.onload = function (){
  const par = document.createElement("p");
  const node = document.createTextNode("I loaded");
  par.appendChild(node);
  document.querySelector(".main-content").appendChild(par);
  console.log("I loaded")
}