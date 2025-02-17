function telljoke() {
  let joke = document.querySelector("#joke");
  joke.innerHTML = "pruena generando un chiste";
}

button1 = document.querySelector("#submit");

button1.addEventListener("click", telljoke);
