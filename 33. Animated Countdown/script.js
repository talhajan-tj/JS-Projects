const replay = document.getElementById("replay");
const counterEl = document.querySelector(".counter");
const finalEl = document.querySelector(".final");
const numsEl = document.querySelectorAll(".nums span");

function count() {
  numsEl.forEach((num, idx) => {
    const nextToLast = num.length - 1;
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counterEl.classList.add("hide");
        finalEl.classList.add("show");
      }
    });
  });
}
count();

replay.addEventListener("click", () => {
  counterEl.classList.remove("hide");
  finalEl.classList.remove("show");
  numsEl.forEach((num) => {
    num.classList.value = "";
  });
  numsEl[0].classList.add("in");
  count();
});
