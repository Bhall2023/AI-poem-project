function displayPoem(response){
  let poemText = response.data.answer; 

new Typewriter("#poem", 
  {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7689111d9btfeef8e4e3cc0cba8be0o7";
  let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line romantic love poem. Make sure to follow the user instructions."; 
  let prompt = `Generate a romatic love poem about ${instructionsInput.value}`; 
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a romantic love poem about ${instructionsInput.value}</div>`;

axios.get(apiUrl).then(displayPoem);

}
  

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
