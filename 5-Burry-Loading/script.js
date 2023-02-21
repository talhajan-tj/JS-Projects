const loadText = document.querySelector(".load");
const bg = document.querySelector(".bg");

let load = 0;
let init = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(init);
  }
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 1, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 1, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
