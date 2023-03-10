const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");
const dateInNumber = document.querySelector(".circle");

const days = [
  "Sunday",
  "monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// Toggle Button
toggle.addEventListener("click", (e) => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

// Time Show
setInterval(repeat, 1000);

function repeat() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  timeEl.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute}`;

  const dayOfWeek = now.getDay();
  const month = now.getMonth();
  const dayOfMonth = now.getDate();

  dateEl.innerHTML = `${days[dayOfWeek]}, ${months[month]} <span class="circle">${dayOfMonth}</span>`;

  // Clock Needles
  hourEl.style.transform = `translate(-50%, -100%) rotate(${hour * 30}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minute * 6}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${second * 6}deg)`;
}
