const theWords = ["Hi", "Bonjour", "Hallo", "Hola", "Kaixo", "Olá"];
const theBox = document.getElementById("hiword");
let idx = 0;

const writeBox = (word) => {
  const pieces = word.split("");
  let letterIndex = 0;
  const writeLetters = () => {
    if (letterIndex === pieces.length + 1) {
      setTimeout(switchWord, 1000); // Wait 1 second before switching to the next word
    } else {
      theBox.innerHTML = pieces.slice(0, letterIndex).join("");
      letterIndex++;
      setTimeout(writeLetters, 100);
    }
  };
  writeLetters();
};

const switchWord = () => {
  theBox.style.opacity = 0; // Start transition to fade out
  setTimeout(() => {
    idx = idx >= theWords.length - 1 ? 0 : idx + 1;
    writeBox(theWords[idx]);
    theBox.style.opacity = 1; // Fade in the new word
  }, 500); // Transition time should match CSS
};

writeBox(theWords[idx]); // Start with the first word
