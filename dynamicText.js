const dynamicText = document.getElementById('dynamicText');
const words = [
  "designing",
  "programming",
  "innovating",
  "collaborating",
  "engineering",
  "inspiring",
  "competing",
  "mentoring",
  "building",
  "learning",
  "competing",
  "achieving",
  "exploring",
  "inventing",
  "CAD",
  "building",
  "machining",
  "improving",
  "leading",
  "connecting",
  "transforming",
  "challenges",
  "games",
  "discovering",
  "programming",
  "mentoring",
  "teaching",
  "exploring",
  "fun",
  "growing",
  "education",
  "innovation",
  "competition",
  "teamwork",
  "problem-solving",
  "strategy",
  "achievement",
  "leadership",
  "communication",
  "outreach",
  "creativity",
  "STEM",
  "learning",
  "challenges",
  "success",
  "imagination",
  "sustainability",
  "discovery",
  "collaboration",
  "teamwork",
  "inspiration"
];

let currentWordIndex = 0;
const shuffledWords = shuffleArray(words); // Shuffled words to avoid immediate repetition

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function updateDynamicText() {
  dynamicText.style.opacity = 0;
  setTimeout(() => {
    dynamicText.textContent = shuffledWords[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % shuffledWords.length;
    dynamicText.style.opacity = 1;
  }, 500); // Delay before changing the word
}

updateDynamicText(); // Initial text

setInterval(updateDynamicText, 2500); // Change the word every 2.5 seconds
