const img = document.querySelector(".box img");
const likes = document.querySelector(".likes");
const heart = document.querySelector(".heart");

let likesCount = 0;

img.addEventListener("dblclick", (e) => {
  likes.innerText = ++likesCount;
  heart.classList.add("clicked");
  setTimeout(() => {
    heart.classList.remove("clicked");
  }, 1000);

  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);
  const offsetLeft = e.target.offsetLeft;
  const offsetTop = e.target.offsetTop;
  console.log(offsetLeft, offsetTop);
});
