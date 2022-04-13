const header = document.querySelector(".header");
const question = document.querySelector(".text");
const next = document.querySelector(".next");
const choice1 = document.querySelector(".choice1");
const choice2 = document.querySelector(".choice2");
const choice3 = document.querySelector(".choice3");
const choice4 = document.querySelector(".choice4");

const questions = {
  question1: {
    question: "What is the only mammal that can fly? ",
    choice: ["Bats", "Pijeon", "Flying squirrel", "Flying Ray"],
    answer: "Bats",
  },
  question2: {
    question: "How many hearts does octopuses have?",
    choice: ["4", "3", "2", "1"],
    answer: "3",
  },
  question3: {
    question: "How many islands does Sweden have?",
    choice: ["127", "75,263", "153,900", "267,570"],
    answer: "267,570",
  },
  question5: {
    question: "How long is the human circulatory system?",
    choice: ["500 miles", "200 meters", "60,000 miles", "25,000 miles"],
    answer: "60,000 miles",
  },
  question6: {
    question: "Where the world's first animated film was made?",
    choice: ["USA", "France", "Argentina", "Mexico"],
    answer: "Argentina",
  },
  question7: {
    question: "How much calories do blue whales eat in one mouthful?",
    choice: [
      "457,000 calories",
      "265,000 calories",
      "635,000 calories",
      "85,000 calories",
    ],
    answer: "457,000 calories",
  },
  question8: {
    question:
      "How many calories do humans burn after banging their head against a wall for one hour?",
    choice: ["50 calories", "150 calories", "300 calories", "75 calories"],
    answer: "150 calories",
  },
  question9: {
    question:
      "What percentage of american adults think that chocolate milk comes from brown cows?",
    choice: ["2%", "5%", "15%", "7%"],
    answer: "7%",
  },
  question10: {
    question: "In what country was invented the hawaiian pizza?",
    choice: ["Italia", "USA", "Canada", "Chile"],
    answer: "Canada",
  },
  question11: {
    question: "What percentage of the ocean was explored by humans?",
    choice: ["50%", "35%", "5%", "10%"],
    answer: "5%",
  },
  question12: {
    question: "What is illegal in Switzerland?",
    choice: [
      "Owning just one guinea pig",
      "Paying taxes",
      "Not having a bank account",
      "Eating outside",
    ],
    answer: "Owning just one guinea pig",
  },
};

const arrAnimators = ["animatorHi", "animatorO", "animatorX", "animatorQ"];

function animatorShow(letter) {
  for (const animatorSelected of arrAnimators) {
    if (animatorSelected === `animator${letter}`) {
      console.log(`show ${animatorSelected}`);
      document.getElementById(`animator${letter}`).style.animationName = "show";
      document.getElementById(`animator${letter}`).style.animationDuration =
        "0.5s";
      document.getElementById(`animator${letter}`).style.animationFillMode =
        "forwards";
    } else {
      console.log(`hide ${animatorSelected}`);
      document.getElementById(`animator${letter}`).style.animationName = "hide";
      document.getElementById(`animator${letter}`).style.animationDuration =
        "0.5s";
      document.getElementById(`animator${letter}`).style.animationFillMode =
        "forwards";
      console.log(document.getElementById(`animator${letter}`).style);
    }
  }
}

let lives = 3;
let gameOn = false;

animatorShow("Hi");

function randomQuestion(obj) {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}

let actualQuestion = "";

function randomize() {
  actualQuestion = randomQuestion(questions);
  console.log(actualQuestion);
  console.log(questions[actualQuestion].question);
  header.style.color = "black";
  choice1.style.backgroundColor = "white";
  choice2.style.backgroundColor = "white";
  choice3.style.backgroundColor = "white";
  choice4.style.backgroundColor = "white";
  header.textContent = actualQuestion;
  question.textContent = questions[actualQuestion].question;
  choice1.textContent = questions[actualQuestion].choice[0];
  choice2.textContent = questions[actualQuestion].choice[1];
  choice3.textContent = questions[actualQuestion].choice[2];
  choice4.textContent = questions[actualQuestion].choice[3];
}

choice1.addEventListener("click", function () {
  if (choice1.textContent === questions[actualQuestion].answer) {
    choice1.style.backgroundColor = "green";
    header.textContent = "Right answer!";
    header.style.color = "green";
    next.style.animationName = "show";
    next.style.animationDuration = "0.5s";
    next.style.animationFillMode = "forwards";
    next.style.cursor = "pointer";
    animatorShow("X");
  } else {
    animatorShow("O");
    choice1.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";
    lives -= 1;
  }
});

choice2.addEventListener("click", function () {
  if (choice2.textContent === questions[actualQuestion].answer) {
    choice2.style.backgroundColor = "green";
    header.textContent = "Right answer!";
    header.style.color = "green";
    next.style.animationName = "show";
    next.style.animationDuration = "0.5s";
    next.style.animationFillMode = "forwards";
    animatorShow("X");
  } else {
    animatorShow("O");
    choice2.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";

    lives -= 1;
  }
});

choice3.addEventListener("click", function () {
  if (choice3.textContent === questions[actualQuestion].answer) {
    header.textContent = "Right answer!";
    header.style.color = "green";
    next.style.animationName = "show";
    next.style.animationDuration = "0.5s";
    next.style.animationFillMode = "forwards";
    animatorShow("X");
  } else {
    animatorShow("O");
    choice3.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";
    lives -= 1;
  }
});

choice4.addEventListener("click", function () {
  if (choice4.textContent === questions[actualQuestion].answer) {
    header.textContent = "Right answer!";
    header.style.color = "green";
    next.style.animationName = "show";
    next.style.animationDuration = "0.5s";
    next.style.animationFillMode = "forwards";
    animatorShow("X");
  } else {
    animatorShow("O");
    choice4.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";
    lives -= 1;
  }
});

next.addEventListener("click", function () {
  delete questions[actualQuestion];
  gameOn = false;
  animatorShow("Q");
  randomize();
  next.style.animationName = "hide";
  next.style.animationDuration = "0.5s";
  next.style.animationFillMode = "forwards";
});
