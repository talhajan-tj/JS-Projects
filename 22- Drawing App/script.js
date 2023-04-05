const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let color = "black";
let p1, p2;
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  p1 = e.offsetX;
  p2 = e.offsetY;
  console.log(p1, p2);
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  p1 = undefined;
  p2 = undefined;
  console.log(p1, p2);
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x = e.offsetX;
    const y = e.offsetY;

    drawCiecle(x, y);
    drawLine(p1, p2, x, y);
    p1 = x;
    p2 = y;
  }
});

function drawCiecle(p1, p2) {
  ctx.beginPath();
  ctx.arc(p1, p2, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(p1, p2, x, y) {
  ctx.beginPath();
  ctx.moveTo(p1, p2);
  ctx.lineTo(x, y);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
