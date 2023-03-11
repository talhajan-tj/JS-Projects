const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;
  const xPos = x - buttonLeft;
  const yPos = y - buttonTop;

  btn.innerHTML = `Click Me <span class="circle" style="left: ${xPos}px; top: ${yPos}px"></span>`;
});

// This is Test
