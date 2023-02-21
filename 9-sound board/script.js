const sounds = ["boo", "laugh", "tada", "applause"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});
function stopSound() {
  sounds.forEach((sound) => {
    const tune = document.getElementById(sound);
    tune.pause();
    tune.currentTime = 0;
  });
}
