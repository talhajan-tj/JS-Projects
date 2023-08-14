const slider = document.querySelector(".slider");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const downBtn = document.querySelector(".down-btn");
const upBtn = document.querySelector(".up-btn");
const sliderLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const slideHeight = slider.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * slideHeight
  }px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;
};
