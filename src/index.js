function displayPoem(response){
  console.log("poem generated", response);

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

  let instuctionsInput = document.querySelector("#user-instructions");
  let apiKey = "7689111d9btfeef8e4e3cc0cba8be0o7";
  let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line romantic love poem. Make sure to follow the user instructions."; 
  let prompt = `Generate a romatic love poem about ${instuctionsInput.value}`; 
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

console.log("Generating poem");
console.log (`Prompt: ${prompt}`);
console.log (`Context: ${context}`);

axios.get(apiUrl).then(displayPoem);

}
  

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
