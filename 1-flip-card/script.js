"use-strict";
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeExpandClass();
    card.classList.add("expand");
  });
});

function removeExpandClass() {
  cards.forEach((card) => {
    card.classList.remove("expand");
  });
}
