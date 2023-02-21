const counters = document.querySelectorAll(".count");

counters.forEach((count) => {
  count.innerHTML = "0";
  const updateCounter = () => {
    const target = +count.getAttribute("data-target");
    const increment = target / 20;
    const c = +count.innerHTML;

    if (c < target) {
      count.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 100);
    } else {
      count.innerText = target;
    }
  };
  updateCounter();
});
