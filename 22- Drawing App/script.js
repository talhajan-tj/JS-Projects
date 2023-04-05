const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let color = "black";

function drawCiecle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(p1, p2, x, y) {
  ctx.beginPath();
  ctx.moveTo(p1, p2);
  ctx.lineTo(x, y);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}

drawCiecle(200, 200);
drawLine(400, 400, 400, 800);
