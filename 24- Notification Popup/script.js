const btn = document.getElementById("button");
const toast = document.getElementById("toast");
const msgs = ["Message One", "Message Two", "Message Three", "Message Four"];

btn.addEventListener("click", () => {
  const alert = document.createElement("div");
  alert.classList.add("toast");
  alert.innerText = randomMsg();
  toast.appendChild(alert);
});

function randomMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)];
}
