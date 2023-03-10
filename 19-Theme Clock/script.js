const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");

const days = [
  "monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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
const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
console.log(now);
timeEl.innerHTML = `${hour}:${minute}`;

const day = now.getDay();
const month = now.getMonth();
// const day = now.getDay();
dateEl.innerHTML = `${day}, ${month}`;
