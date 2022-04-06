// console.log("hello world");

const message = document.getElementById("message");

const addMovie = (event) => {
  event.preventDefault();
  let inputField = document.querySelector("input");
  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);
  movieTitle.addEventListener("click", crossOffMovie);
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteMe");
  deleteBtn.textContent = "X";
  movie.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteMovie);
  let total = document.querySelector("ul");
  total.appendChild(movie);
  message.innerText = "Movie Added!";
  inputField.value = "";
};

const deleteMovie = (event) => {
  //   console.log("press");
  event.target.parentNode.remove();
  message.textContent = "Movie Deleted!";
};

const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = "Movie watched!";
  } else {
    message.textContent = "Movie added back!";
  }
};

document.querySelector("form").addEventListener("submit", addMovie);
