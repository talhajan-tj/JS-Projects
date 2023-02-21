const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const counts = document.querySelectorAll(".count");
const barLine = document.getElementById("bar-line");
let currentActive = 1;
next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > counts.length) {
    currentActive = counts.length;
  }
  update();
});
prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === counts.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  counts.forEach((count, i) => {
    if (i < currentActive) {
      count.classList.add("active");
    } else {
      count.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  barLine.style.width =
    ((actives.length - 1) / (counts.length - 1)) * 100 + "%";
}
