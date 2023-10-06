const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

// const toggles = document.querySelectorAll(".toggle");
// const heading = document.querySelector(".faq h3");
// const faq = document.querySelector(".faq");
// toggles.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     toggle.parentNode.classList.toggle("active");
//   });
// });
// heading.addEventListener("click", () => {
//   console.log("heading clicked");
//   faq.classList.toggle("active");
// });
