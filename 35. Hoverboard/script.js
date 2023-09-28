const hoverboard = document.getElementById("hover-container");
const colors = ["#e74c3c", "#8e44ad", "#8e56", "#3498db", "#2ecc71"];

const squareNum = 500;

for (let i = 0; i < squareNum; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => addColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  hoverboard.appendChild(square);
}

function addColor(el) {
  const color = getRandomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(el) {
  el.style.background = "#1d1d1d";
  el.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
