import JsonQuestions from "./trivia.json" assert { type: "json" };

let triviaQuestions = [...JsonQuestions];
let trivia_btn = document.getElementsByClassName("btn-container")[0];
let nav = document.querySelector("nav");
let container = document.createElement("div");
container.id = "trivia-container";
document.body.append(container);
let trivia = document.createElement("div");
let gameContainer = document.querySelector("#game-container");
let question = document.querySelector(".title");
let choices = Array.from(document.querySelectorAll(".choice"));
let scoreContainer = document.querySelector("#paragraph");
let scoreText = document.querySelector(".final-score");
let progress = document.querySelector("progress");
let imageHappy = document.querySelector("#img-happy");
let imageSad = document.querySelector("#img-sad");
let scoreView = document.querySelector(".score");
let score = 0;
let bonus = 10;
let randomQuestion = {};

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
  if (triviaQuestions.length == 0) {
    progress.style.display = "none";
    question.innerText = "";
    scoreView.style.position = 'absolute'
    scoreView.style.bottom = '100px'
    choices.forEach((choice) => choice.classList.add("hide"));
    scoreContainer.classList.add("score_end");
    if (score >= 70) {
      imageHappy.classList.add("active");
    } else if (score === 0) {
      scoreText.innerText = 0;
      imageSad.classList.add("active");
    } else {
      imageSad.classList.add("active");
    }
  }
  const questionIndex = Math.floor(Math.random() * triviaQuestions.length);
  randomQuestion = triviaQuestions[questionIndex];
  question.innerText = randomQuestion.question;
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = randomQuestion["choice" + number];
  });
  triviaQuestions.splice(questionIndex, 1);
};

// Choice Event
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    progress.value += 10;
    let selectedChoice = e.target;
    let selectedAnswer = selectedChoice.dataset["number"];
    let classToApply = selectedAnswer == randomQuestion.answer ? "correct" : "incorrect";
    selectedChoice.classList.add(classToApply);
    if (classToApply === "correct") {
      incrementScore(bonus);
    }
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
  imageHappy.classList.remove("active");
  imageSad.classList.remove("active");
  nav.style.display = "block";
  scoreText.innerText = 0;
  score = 0;
  progress.style.display = "block";
  progress.value = 0;
  triviaQuestions = [...JsonQuestions]
};
