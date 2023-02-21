const btn = document.getElementById("search-btn");
const searchBox = document.getElementById("search");

btn.addEventListener("click", () => {
  searchBox.classList.toggle("search");
  searchBox.focus();
});
