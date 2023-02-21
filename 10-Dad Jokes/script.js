const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  // Using async await
  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();
  joke.innerHTML = data.joke;

  // --  Using .then Fetching --
  // fetch("https://icanhazdadjoke.com", config)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     joke.innerHTML = data.joke;
  //   });
}
