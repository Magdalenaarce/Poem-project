function displayjoke(response) {
  let joke = document.querySelector("#joke");
  joke.innerHTML = response.data.answer;
}

function telljoke(event) {
  let instructions = document.querySelector("#text1");
  let apikey = "ec2tac9a4a7ec807298084203cbof638";
  let context =
    "you give the best answers and preciss, you dont write any context and just answer with list of things such as poems, baby names, recipes or any thing that the user ask you";
  let prompt = `answer following the user instructions: ${instructions}`;
  let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  axios.get(apiurl).then(displayjoke);
}

button1 = document.querySelector("#submit");

button1.addEventListener("click", telljoke);
