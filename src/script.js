function displayjoke(response) {
  let joke = document.querySelector("#joke");
  joke.innerHTML = response.data.answer;
}

function telljoke(event) {
  let instructions = document.querySelector("#text1");
  let apikey = "ec2tac9a4a7ec807298084203cbof638";
  let context = "you are a romantic poem expert and love to write short poems.";
  let prompt = `write a poem following the user instructions: ${instructions}`;
  let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  axios.get(apiurl).then(displayjoke);
}

button1 = document.querySelector("#submit");

button1.addEventListener("click", telljoke);
