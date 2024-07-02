const theWords = ["Hi", "Bonjour", "Hallo", "Hola", "Kaixo", "Olá"];
const theBox = document.getElementById("hiword");
let idx = 0;

const writeBox = (word) => {
    const pieces = word.split("");
    let letterIndex = 0;
    const writeLetters = () => {
        if (letterIndex === pieces.length + 1) {
            setTimeout(switchWord, 1000); // Wait 2 seconds before switching to the next word
        } else {
            theBox.innerHTML = pieces.slice(0, letterIndex).join("");
            letterIndex++;
            setTimeout(writeLetters, 100);
        }
    };
    writeLetters();
};

const switchWord = () => {
    idx = idx >= theWords.length - 1 ? 0 : idx + 1;
    writeBox(theWords[idx]);
};

document.addEventListener("DOMContentLoaded", () => {
    writeBox(theWords[idx]); // Start with the first word
});
