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
  revealMessage();
};

const deleteMovie = (event) => {
  //   console.log("press");
  event.target.parentNode.remove();
  let text = event.target.parentNode.innerText.replace("X", "");
  console.log(text);
  message.textContent = `${text} deleted!`;
  revealMessage();
};

const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = `${event.target.textContent} watched!`;
  } else {
    message.textContent = `${event.target.textContent}  added back!`;
  }
  revealMessage();
};

const revealMessage = () => {
  message.classList.remove("hide");
  setTimeout(() => message.classList.add("hide"), 1000);
};

document.querySelector("form").addEventListener("submit", addMovie);
