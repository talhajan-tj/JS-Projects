const magicBtn = document.getElementById("magic");
const boxesContainer = document.getElementById("boxes");

function createBox() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBox();

magicBtn.addEventListener("click", () => {
  boxesContainer.classList.toggle("big");
});
