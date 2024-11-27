function poemGenerator(event) {
    event.preventDefault();

 new Typewriter('#poem', {
  strings: " The poem will be here",
  autoStart: true,
  delay: 100,
  cursor: "",
});   
}

let poemGeneratorElement = document.querySelector("#poem-generator-form");
poemGeneratorElement.addEventListener("submit", poemGenerator);