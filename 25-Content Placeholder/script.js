const card = document.querySelector(".card");

setInterval(() => {
  card.classList.remove("animate-active");
  afterAnimate();
}, 8000);

function afterAnimate() {
  const cardImg = document.querySelector(".img img");

  cardImg.src = "laptop.jpg";
  cardImg.style.opacity = "1";
}
