// App Data
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
let score = 0;
let bonus = 10;
let randomQuestion = {};
let questions = [
  {
    question: "When was mardi gras invented?",
    choice1: " March 3, 1699",
    choice2: "May 8, 1765",
    choice3: "August 22, 1888",
    choice4: "November 10, 1705",
    answer: 1,
  },
  {
    question: "Who Celebrates Mardi Gras the most?",
    choice1: "Venice, Italy",
    choice2: "New Orleans, Louisiana, USA",
    choice3: "Rio de Janiero, Brazil",
    choice4: "Mobile, Alabama, USA",
    answer: 2,
  },
  {
    question: "What do the colors of Mardi Gras stand for? ",
    choice1: "Love, happiness and sacred",
    choice2: "Hope, value and richness of life",
    choice3: "Faith, power and justice",
    choice4: "Grass, sun and flowers",
    answer: 3,
  },
  {
    question: "What does mardi gras mean?",
    choice1: "Big party",
    choice2: "New Orleans",
    choice3: "Parade",
    choice4: "Fat Tuesday",
    answer: 4,
  },
  {
    question: "Where was the first known celebration of Mardi Gras was held in?",
    choice1: "Mobile, AL",
    choice2: "Biloxi, MS",
    choice3: "Corpus Christi, TX",
    choice4: "New Orleans, LA",
    answer: 1,
  },
  {
    question: "How many king cakes are sold every year in New Orleans?",
    choice1: "5,000",
    choice2: "2 million",
    choice3: "25,000",
    choice4: "750,000",
    answer: 4,
  },
  {
    question: "Since when Mardi Gras has been a legal holiday?",
    choice1: "1990",
    choice2: "1875",
    choice3: "1905",
    choice4: "1850",
    answer: 2,
  },
  {
    question: "Before the Cajuns settled in Louisiana, where did they settle after leaving France?",
    choice1: "Maine",
    choice2: "Florida",
    choice3: "Eastern Canada",
    choice4: "The Great Lakes",
    answer: 3,
  },
  {
    question: "Which of the following is a Louisiana dish?",
    choice1: "Gumbo",
    choice2: "All of these",
    choice3: "Jambalaya",
    choice4: "Etouffée",
    answer: 2,
  },
  {
    question: "What does it mean to get the baby in your piece of king cake?",
    choice1: "Wealth and riches",
    choice2: "Lucky in love",
    choice3: "Absolutely nothing",
    choice4: "Good luck all year",
    answer: 4,
  },
];

trivia_btn.addEventListener("click", () => {
  nav.style.display = "none";
  container.classList.add("active");
  trivia.classList.add("trivia");
  container.append(trivia);
  gameContainer.classList.add("active");
  trivia.append(gameContainer);
  display();
});

display = () => {
  if (questions.length == 0) {
    progress.style.display = "none";
    question.innerText = "";
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
  const questionIndex = Math.floor(Math.random() * questions.length);
  randomQuestion = questions[questionIndex];
  question.innerText = randomQuestion.question;
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = randomQuestion["choice" + number];
  });
  questions.splice(questionIndex, 1);
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

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

// Closing Game
container.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  reset();
});

reset = () => {
  container.removeAttribute("class");
  container.removeChild(container.firstChild);
  choices.forEach((choice) => choice.classList.remove("hide"));
  scoreContainer.classList.remove("score_end");
  imageHappy.classList.remove("active");
  imageSad.classList.remove("active");
  nav.style.display = "block";
  scoreText.innerText = "";
  score = 0;
  progress.style.display = "block";
  progress.value = 0;
  questions = [
    {
      question: "When was mardi gras invented?",
      choice1: " March 3, 1699",
      choice2: "May 8, 1765",
      choice3: "August 22, 1888",
      choice4: "November 10, 1705",
      answer: 1,
    },
    {
      question: "Who Celebrates Mardi Gras the most?",
      choice1: "Venice, Italy",
      choice2: "New Orleans, Louisiana, USA",
      choice3: "Rio de Janiero, Brazil",
      choice4: "Mobile, Alabama, USA",
      answer: 2,
    },
    {
      question: "What do the colors of Mardi Gras stand for? ",
      choice1: "Love, happiness and sacred",
      choice2: "Hope, value and richness of life",
      choice3: "Faith, power and justice",
      choice4: "Grass, sun and flowers",
      answer: 3,
    },
    {
      question: "What does mardi gras mean?",
      choice1: "Big party",
      choice2: "New Orleans",
      choice3: "Parade",
      choice4: "Fat Tuesday",
      answer: 4,
    },
    {
      question: "Where was the first known celebration of Mardi Gras was held in?",
      choice1: "Mobile, AL",
      choice2: "Biloxi, MS",
      choice3: "Corpus Christi, TX",
      choice4: "New Orleans, LA",
      answer: 1,
    },
    {
      question: "How many king cakes are sold every year in New Orleans?",
      choice1: "5,000",
      choice2: "2 million",
      choice3: "25,000",
      choice4: "750,000",
      answer: 4,
    },
    {
      question: "Since when Mardi Gras has been a legal holiday?",
      choice1: "1990",
      choice2: "1875",
      choice3: "1905",
      choice4: "1850",
      answer: 2,
    },
    {
      question: "Before the Cajuns settled in Louisiana, where did they settle after leaving France?",
      choice1: "Maine",
      choice2: "Florida",
      choice3: "Eastern Canada",
      choice4: "The Great Lakes",
      answer: 3,
    },
    {
      question: "Which of the following is a Louisiana dish?",
      choice1: "Gumbo",
      choice2: "All of these",
      choice3: "Jambalaya",
      choice4: "Etouffée",
      answer: 2,
    },
    {
      question: "What does it mean to get the baby in your piece of king cake?",
      choice1: "Wealth and riches",
      choice2: "Lucky in love",
      choice3: "Absolutely nothing",
      choice4: "Good luck all year",
      answer: 4,
    },
  ];
};
