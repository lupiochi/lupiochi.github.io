/*!
 * Author: Luiz F. Piochi
 * Website: lupiochi.github.io | linkedin.com/in/luiz-piochi
 * Description: Basic word typing animation. You can add the desired words as strings in 'const theWords'. 
 */



/* add any words you want here */

const theWords = ["Hi,", "Bonjour,", "Hallo,", "Hola,", "Olá,"];
const theBox = document.getElementById("hiword");
let idx = 0;

const writeBox = (word) => {
  const pieces = word.split("");
  let letterIndex = 0;
  const writeLetters = () => {
    if (letterIndex === pieces.length + 1) {
      setTimeout(switchWord, 1000); /* 1000 = 1s : This is the time each word will stay in place before transitioning into the next one */
    } else {
      theBox.innerHTML = pieces.slice(0, letterIndex).join("");
      letterIndex++;
      setTimeout(writeLetters, 100);
    }
  };
  writeLetters();
};

const switchWord = () => {
  theBox.style.opacity = 0;
  setTimeout(() => {
    idx = idx >= theWords.length - 1 ? 0 : idx + 1;
    writeBox(theWords[idx]);
    theBox.style.opacity = 1;
  }, 500);
};

writeBox(theWords[idx]);
