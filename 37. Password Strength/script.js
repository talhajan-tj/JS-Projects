const background = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  const passLength = 20 - e.target.value.length * 2;
  background.style.filter = `blur(${passLength < 0 ? 0 : passLength}px)`;
});
