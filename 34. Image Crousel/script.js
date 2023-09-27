const imgEl = document.querySelector(".img-container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const imgs = document.querySelectorAll(".img-container img");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  imageChange();
}
function imageChange() {
  if (idx > imgs.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }
  imgEl.style.transform = `translateX(-${idx * 500}px)`;
}
