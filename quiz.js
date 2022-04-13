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
  question13: {
    question: "For how much time can a wood frog hold its pee?",
    choice: ["2 days", "3 hours", "5 months", "8 months"],
    answer: "8 months",
  },
  question14: {
    question: "How does space smells like?",
    choice: ["No smell", "humidity", "seared steak", "sweat"],
    answer: "seared steak",
  },
  question15: {
    question: "How much questions do kids ask in a day in average?",
    choice: ["300 questions", "150 questions", "50 questions", "225 questions"],
    answer: "300 questions",
  },
};

function animatorShow(letter) {
  if (letter === "Hi") {
    document.querySelector(
      ".animator"
    ).innerHTML = `<lottie-player id='animatorHi' src="https://assets10.lottiefiles.com/private_files/lf30_9czxyepk.json"
    background="transparent" speed="1" loop autoplay>
  </lottie-player>`;
  } else if (letter === "X") {
    document.querySelector(
      ".animator"
    ).innerHTML = ` <lottie-player id='animatorX' src="https://assets10.lottiefiles.com/private_files/lf30_qynkjvnj.json"
  background="transparent" speed="1" loop autoplay>
</lottie-player>`;
  } else if (letter === "O") {
    document.querySelector(
      ".animator"
    ).innerHTML = `<lottie-player id='animatorO' src="https://assets10.lottiefiles.com/private_files/lf30_0tuog8jo.json"
background="transparent" speed="1" loop autoplay>
</lottie-player>`;
  } else if (letter === "Q") {
    document.querySelector(
      ".animator"
    ).innerHTML = `<lottie-player id='animatorQ' src="https://assets10.lottiefiles.com/private_files/lf30_nianlkcb.json"
background="transparent" speed="1" loop autoplay>
</lottie-player>`;
  }
}

let lives = 3;
let gameOn = false;
let restart = false;

animatorShow("Hi");

function randomQuestion(obj) {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}

let actualQuestion = "";
let questionNumber = 1;
let henryLife = 90;
let henryPoints = 15;

function lifeCheck() {
  if (lives === 2) {
    document.querySelector(".lives").innerHTML = `<p>LIVES</p>
    <lottie-player id='hearth1' src="https://assets7.lottiefiles.com/packages/lf20_ftxgjunm.json"
      background="transparent" speed="0.5" style="width: 50px; height: 50px;" loop autoplay></lottie-player>
    <lottie-player id='hearth2' src="https://assets7.lottiefiles.com/packages/lf20_ftxgjunm.json"
      background="transparent" speed="0.5" style="width: 50px; height: 50px;" loop autoplay></lottie-player>
      <lottie-player id='hearth2' src="https://assets7.lottiefiles.com/packages/lf20_ftxgjunm.json"
      background="transparent" speed="0.5" style="width: 50px; height: 50px; opacity:0;" loop autoplay></lottie-player>`;
  } else if (lives === 1) {
    document.querySelector(".lives").innerHTML = `<p>LIVES</p>
    <lottie-player id='hearth1' src="https://assets7.lottiefiles.com/packages/lf20_ftxgjunm.json"
      background="transparent" speed="0.5" style="width: 50px; height: 50px;" loop autoplay></lottie-player>
    <lottie-player id='hearth2' src="https://assets7.lottiefiles.com/packages/lf20_ftxgjunm.json"
      background="transparent" speed="0.5" style="width: 50px; height: 50px; opacity:0" loop autoplay></lottie-player>
      <lottie-player id='hearth2' src="https://assets7.lottiefiles.com/packages/lf20_ftxgjunm.json"
      background="transparent" speed="0.5" style="width: 50px; height: 50px; opacity:0;" loop autoplay></lottie-player>`;
  } else if (lives === 0) {
    document.querySelector(".lives").innerHTML = `<p>LIVES</p>
    <lottie-player id='hearth1' src="https://assets7.lottiefiles.com/packages/lf20_ftxgjunm.json"
      background="transparent" speed="0.5" style="width: 50px; height: 50px; opacity:0" loop autoplay></lottie-player>
    <lottie-player id='hearth2' src="https://assets7.lottiefiles.com/packages/lf20_ftxgjunm.json"
      background="transparent" speed="0.5" style="width: 50px; height: 50px; opacity:0" loop autoplay></lottie-player>
      <lottie-player id='hearth2' src="https://assets7.lottiefiles.com/packages/lf20_ftxgjunm.json"
      background="transparent" speed="0.5" style="width: 50px; height: 50px; opacity:0;" loop autoplay></lottie-player>`;
    header.innerHTML = `NO MORE LIVES :(`;
    question.innerHTML = `YOU LOST TO HENRY! MAYBE YOU WANT TO TRY AGAIN?`;
    next.textContent = `TRY AGAIN!`;
    next.style.cursor = "pointer";
    next.style.animationName = "show";
    next.style.animationDuration = "0.5s";
    next.style.animationFillMode = "forwards";
    document.querySelector(`.bottom`).style.animationName = "hide";
    document.querySelector(`.bottom`).style.animationDuration = "0.5s";
    document.querySelector(`.bottom`).style.animationFillMode = "forwards";
    restart = true;
  }
}

function henryCheck() {
  if (henryPoints === 1) {
    header.innerHTML = `YOU DETHRONED HENRY!`;
    question.innerHTML = `CONGRATULATION, YOU'RE NOW THE KING OF THE FUN FACT QUIZ! `;
    next.textContent = `PLAY AGAIN!`;
    next.style.cursor = "pointer";
    next.style.animationName = "show";
    next.style.animationDuration = "0.5s";
    next.style.animationFillMode = "forwards";
    document.querySelector(`.bottom`).style.animationName = "hide";
    document.querySelector(`.bottom`).style.animationDuration = "0.5s";
    document.querySelector(`.bottom`).style.animationFillMode = "forwards";
    restart = true;
    animatorShow("X");
    henryLife -= 6;
    document.querySelector(".red").width = `${henryLife}%`;
    henryPoints -= 1;
    document.querySelector(".henryLife").innerHTML = `${henryPoints}/15`;
  }
}

function randomize() {
  actualQuestion = randomQuestion(questions);
  console.log(actualQuestion);
  console.log(questions[actualQuestion].question);
  header.style.color = "black";
  choice1.style.backgroundColor = "white";
  choice2.style.backgroundColor = "white";
  choice3.style.backgroundColor = "white";
  choice4.style.backgroundColor = "white";
  header.textContent = `Question ${questionNumber}`;
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
    next.textContent = "NEXT QUESTION!";
    animatorShow("X");
    henryLife -= 6;
    document.querySelector(".red").width = `${henryLife}%`;
    henryPoints -= 1;
    document.querySelector(".henryLife").innerHTML = `${henryPoints}/15`;
    console.log(`${henryLife}%`);
    henryCheck();
  } else {
    animatorShow("O");
    choice1.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";
    lives -= 1;
    lifeCheck();
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
    next.style.cursor = "pointer";
    next.textContent = "NEXT QUESTION!";
    animatorShow("X");
    henryLife -= 6;
    document.querySelector(".red").width = `${henryLife}%`;
    henryPoints -= 1;
    document.querySelector(".henryLife").innerHTML = `${henryPoints}/15`;
    console.log(`${henryLife}%`);
    henryCheck();
  } else {
    animatorShow("O");
    choice2.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";
    lives -= 1;
    lifeCheck();
  }
});

choice3.addEventListener("click", function () {
  if (choice3.textContent === questions[actualQuestion].answer) {
    choice3.style.backgroundColor = "green";
    header.textContent = "Right answer!";
    header.style.color = "green";
    next.style.animationName = "show";
    next.style.animationDuration = "0.5s";
    next.style.animationFillMode = "forwards";
    next.style.cursor = "pointer";
    next.textContent = "NEXT QUESTION!";
    animatorShow("X");
    henryLife -= 6;
    document.querySelector(".red").width = `${henryLife}%`;
    henryPoints -= 1;
    document.querySelector(".henryLife").innerHTML = `${henryPoints}/15`;
    console.log(`${henryLife}%`);
    henryCheck();
  } else {
    animatorShow("O");
    choice3.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";
    lives -= 1;
    lifeCheck();
  }
});

choice4.addEventListener("click", function () {
  if (choice4.textContent === questions[actualQuestion].answer) {
    choice4.style.backgroundColor = "green";
    header.textContent = "Right answer!";
    header.style.color = "green";
    next.style.animationName = "show";
    next.style.animationDuration = "0.5s";
    next.style.animationFillMode = "forwards";
    next.style.cursor = "pointer";
    next.textContent = "NEXT QUESTION!";
    animatorShow("X");
    henryLife -= 6;
    document.querySelector(".red").width = `${henryLife}%`;
    henryPoints -= 1;
    document.querySelector(".henryLife").innerHTML = `${henryPoints}/15`;
    console.log(`${henryLife}%`);
    henryCheck();
  } else {
    animatorShow("O");
    choice4.style.backgroundColor = "red";
    header.textContent = "Wrong answer!";
    header.style.color = "red";
    lives -= 1;
    lifeCheck();
  }
});

next.addEventListener("click", function () {
  if (restart) {
    document.location.reload();
  }
  if (gameOn) {
    delete questions[actualQuestion];
    animatorShow("Q");
    randomize();
    next.style.animationName = "hide";
    next.style.animationDuration = "0.5s";
    next.style.animationFillMode = "forwards";
    next.style.cursor = "none";
    questionNumber += 1;
  } else {
    gameOn = true;
    animatorShow("Q");
    randomize();
    next.style.animationName = "hide";
    next.style.animationDuration = "0.5s";
    next.style.animationFillMode = "forwards";
    next.style.cursor = "none";
    questionNumber += 1;
    document.querySelector(`.bottom`).style.animationName = "show";
    document.querySelector(`.bottom`).style.animationDuration = "0.5s";
    document.querySelector(`.bottom`).style.animationFillMode = "forwards";
  }
});
