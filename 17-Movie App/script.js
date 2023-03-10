const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6276466882fd7e4e1128e1a10558bdc6&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=6276466882fd7e4e1128e1a10558bdc6&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");

const main = document.querySelector(".main");

// Movie API Result
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, overview, vote_average } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${vote(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>
          ${overview}
          </p>
        </div>`;
    main.appendChild(movieEl);
  });
}

function vote(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
