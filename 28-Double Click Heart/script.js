const img = document.querySelector(".box img");
const likes = document.querySelector(".likes");
const heart = document.querySelector(".heart");

let likesCount = 0;

img.addEventListener("dblclick", () => {
  likes.innerText = ++likesCount;
  heart.classList.add("clicked");
  setTimeout(() => {
    heart.classList.remove("clicked");
  }, 1000);
});
