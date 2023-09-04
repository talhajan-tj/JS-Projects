const textEl = document.querySelector(".text");
const speed = document.getElementById("speed");
const text = "I love programming...!";
let textIdx = 1;

let speedCounter = 300 / speed.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, textIdx);

  textIdx++;

  if (textIdx > text.length) {
    textIdx = 1;
  }
  setTimeout(writeText, speedCounter);
}

speed.addEventListener("input", (e) => {
  speedCounter = 300 / e.target.value;
});
