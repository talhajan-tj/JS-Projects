const img = document.querySelector(".box img");
const likes = document.querySelector(".likes");
const heart = document.querySelector(".heart");
const heartIcon = document.querySelector(".fa-heart");

let likesCount = 0;

img.addEventListener("dblclick", (e) => {
  console.log(e);
  likes.innerText = ++likesCount;
  heart.classList.add("clicked");
  setTimeout(() => {
    heart.classList.remove("clicked");
  }, 1000);
  heartPos(e);
});

const heartPos = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);

  const offsetLeft = e.offsetX;
  const offsetTop = e.offsetY;
  console.log(offsetLeft, offsetTop);

  heartIcon.style.top = `${offsetLeft}px`;
  heartIcon.style.left = `${offsetTop}px`;
  heartIcon.classList.add("active");
  setTimeout(() => {
    heartIcon.classList.remove("active");
  }, 1000);
};
