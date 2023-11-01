import JsonQuestions from "./trivia.json" assert { type: "json" };

let triviaQuestions = [...JsonQuestions];
let score = 0;
let bonus = 10;
let randomQuestion = {};
const nav = document.body.childNodes[6];
const trivia_btn = document.getElementsByClassName("btn-container")[0];
const container = document.createElement("div");
container.id = "trivia-container";
document.body.append(container);
const trivia = document.createElement("div");
const gameContainer = document.querySelector("#game-container");
const question = document.querySelector(".title");
const choices = Array.from(document.querySelectorAll(".choice"));
const scoreContainer = document.querySelector("#paragraph");
const scoreText = document.querySelector(".final-score");
const progress = document.querySelector("progress");
const faceResponse = document.querySelector("picture");
const scoreView = document.querySelector(".score");


trivia_btn.addEventListener("click", () => {
  scoreView.style.position = 'static'
  nav.style.display = "none";
  container.classList.add("active");
  trivia.classList.add("trivia");
  container.append(trivia);
  gameContainer.classList.add("active");
  trivia.append(gameContainer);
  display();
});

function display() {
  if (triviaQuestions.length === 0) {
    progress.style.display = "none";
    question.innerText = "";
    scoreView.style.position = 'absolute'
    scoreView.style.bottom = '100px'
    choices.forEach((choice) => choice.classList.add("hide"));
    scoreContainer.classList.add("score_end");
    faceResponse.classList.add("active");
    if (score >= 70) {
      faceResponse.style.backgroundImage = 'url("./assets/Good.png")';
    } else {
      faceResponse.style.backgroundImage = 'url("./assets/Sad.jpg")'
    }
  } else {
    const questionIndex = Math.floor(Math.random() * triviaQuestions.length);
    randomQuestion = triviaQuestions[questionIndex];
    question.innerText = randomQuestion.question;
    choices.forEach((choice) => {
      const number = choice.dataset["number"];
      choice.innerText = randomQuestion["choice" + number];
    });
    triviaQuestions.splice(questionIndex, 1);
  }
};

// Choice Event
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    progress.value += 10;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const classToApply = selectedAnswer == randomQuestion.answer ? "correct" : "incorrect";
    selectedChoice.classList.add(classToApply);
    classToApply === "correct" && incrementScore(bonus);
    setTimeout(() => {
      selectedChoice.classList.remove(classToApply);
      display();
    }, 1000);
  });
});

function incrementScore(num) {
  score += num;
  scoreText.innerText = score;
};

// Closing Game
container.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  reset();
});

function reset() {
  container.removeAttribute("class");
  container.removeChild(container.firstChild);
  choices.forEach((choice) => choice.classList.remove("hide"));
  scoreContainer.classList.remove("score_end");
  faceResponse.classList.remove("active");
  nav.style.display = "block";
  scoreText.innerText = 0;
  score = 0;
  progress.style.display = "block";
  progress.value = 0;
  triviaQuestions = [...JsonQuestions]
};
