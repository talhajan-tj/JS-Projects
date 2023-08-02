const cardApi = {
  heading: "Lorem Ipsum is simply dummy",
  paragraph:
    "It is a long established fact that a reader will be distracted by the readable content",
  cardImgSrc: "laptop.jpg",
  personImgSrc: "person.png",
  personName: "Jhon Doe",
  date: new Date().getUTCFullYear(),
};
console.log(cardApi, typeof cardApi);
const card = document.querySelector(".card");
const cardImg = document.querySelector(".img img");
const infoImg = document.querySelector(".info-img img");
const contentHead = document.querySelector(".content h3");
const contentParagrph = document.querySelector(".content p");
const contentBox = document.querySelectorAll(".content-box");
const personName = document.querySelector(".info-content h4");
const todayDate = document.querySelector(".info-content p");

setInterval(() => {
  card.classList.remove("animate-active");
  afterAnimate(cardApi);
}, 8000);

function afterAnimate(data) {
  console.log(data);
  cardImg.src = data.cardImgSrc;
  contentHead.innerHTML = data.heading;
  contentParagrph.innerHTML = data.paragraph;
  contentBox.forEach((cBox) => {
    cBox.classList.remove("not-animate");
    infoImg.src = data.personImgSrc;
    personName.innerHTML = data.personName;
    todayDate.innerHTML = data.date;
  });
}
