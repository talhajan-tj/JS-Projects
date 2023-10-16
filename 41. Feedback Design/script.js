const panel = document.getElementById("panel");
const ratingContainer = document.querySelector(".review-container");
const btn = document.querySelector(".btn");
const ratings = document.querySelectorAll(".rating");
let selectedRating = "Satisfied";
ratingContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});
btn.addEventListener("click", () => {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank You..!</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We will use this rating to improve</p>
  `;
});
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
