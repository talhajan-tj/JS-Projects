const cups = document.querySelectorAll(".cup");
const percentage = document.getElementById("percentage");
const liters = document.getElementById("liters");
const remained = document.getElementById("remained");

cups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    cups[idx].classList.contains("full") &&
    !cups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  cups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fillCups = document.querySelectorAll(".cup.full").length;
  console.log(fillCups);
  const totalCups = cups.length;
  if (fillCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = "0";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fillCups / totalCups) * 300}px`;
    percentage.innerText = `${(fillCups / totalCups) * 100}%`;
  }

  if (fillCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fillCups) / 1000}L`;
  }
}
