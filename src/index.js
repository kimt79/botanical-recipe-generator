function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "77tbfd3604c3o03440d5aae80f7caf31";
  let prompt = `Generate recipe for ${instructionsInput.value}`;
  let context =
    "You are an expert in all things botanical. You are a master chef who loves to use roots, herbs and spices in cooking. Your mission is to generate a recipe in basic HTML format without saying HTML. Make sure to follow user instructions.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}
console.log = "Generating Recipe";
console.log = `prompt:${prompt}`;

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
