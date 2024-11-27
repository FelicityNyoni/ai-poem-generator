function displayPoem(response) {
   
    new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 30,
  cursor: "",
}); 
}

function poemGenerator(event) {
event.preventDefault();

let userInstructionsElement = document.querySelector("#user-instructions");
let apiKey = "ab9dbat743ca61fc97fbb6cb364o3017";
let context = "You are an AI Assistant that is an intelligent, expert and love to write poem.Your mission is to generate four line poem in basic HTML and separate the lines with a <br />.Make sure to follow user intructions.Please be very precise, simple and to the point. Make the poem a bit fuuny very esay to understand.Don't include a heading on the poem. At the end of the poem include signed by'SheCodes AI' inside a <strong> element.Can you please include atleast two emojis inside the poem.";
let prompt = `User instructions are: Generate a poem about ${userInstructionsElement.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">⌛Generating a poem about ${userInstructionsElement.value}</div>`;
axios.get(apiUrl).then(displayPoem);
}

let poemGeneratorElement = document.querySelector("#poem-generator-form");
poemGeneratorElement.addEventListener("submit", poemGenerator);