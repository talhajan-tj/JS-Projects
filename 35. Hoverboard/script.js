const hoverboard = document.getElementById("hover-container");
const colors = ["#e74c3c", "#8e44ad", "#8e56", "#3498db", "#2ecc71"];

const squareNum = 500;

for (let i = 0; i < squareNum; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  hoverboard.appendChild(square);
}
