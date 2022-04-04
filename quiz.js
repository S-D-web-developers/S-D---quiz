const header = document.querySelector(".header");
const question = document.querySelector(".text");
const next = document.querySelector(".next");
const animator = document.getElementById("animator");
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
};

lives = 3;

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
  } else {
    choice1.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";
    animator.src =
      "https://assets1.lottiefiles.com/private_files/lf30_qynkjvnj.json";
    console.log(animator);
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
  } else {
    choice2.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";
    animator.src =
      "https://assets1.lottiefiles.com/private_files/lf30_qynkjvnj.json";
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
  } else {
    choice3.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";
    animator.src =
      "https://assets1.lottiefiles.com/private_files/lf30_qynkjvnj.json";
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
  } else {
    choice4.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";
    animator.src =
      "https://assets1.lottiefiles.com/private_files/lf30_qynkjvnj.json";
    lives -= 1;
  }
});

next.addEventListener("click", function () {
  delete questions[actualQuestion];
  randomize();
  next.style.animationName = "hide";
  next.style.animationDuration = "0.5s";
  next.style.animationFillMode = "forwards";
});
