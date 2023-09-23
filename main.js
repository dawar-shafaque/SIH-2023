const dynamicContent = document.getElementById("dynamic-text");
const phrase = ["Location", "Resources", "Assistance"];
let phraseIndex = 0;

function changeWord() {
  dynamicContent.textContent = phrase[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrase.length;
  dynamicContent.classList.remove("word-animation");
  void dynamicContent.offsetWidth; // Trigger a reflow to restart the animation
  dynamicContent.classList.add("word-animation");
}

// Initial word
changeWord();

// Set an interval to change the word every 2 seconds
setInterval(changeWord, 1500);
