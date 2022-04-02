const header = document.querySelector('.header')
const question = document.querySelector('.text');
const next = document.querySelector('.next')
const choice1 = document.querySelector('.choice1');
const choice2 = document.querySelector('.choice2');
const choice3 = document.querySelector('.choice3');
const choice4 = document.querySelector('.choice4');


const questions = {
    question1 : {
        question: "What is the only mammal that can fly? ",
        choice: ['Bats', 'Pijeon', 'Flying squirrel', 'Flying Ray'],
        answer: 'Bats'
    }, 
    question2: {
        question: "How many hearts does octopuses have?",
        choice: ['4','3','2', '1'],
        answer: '3'         
    }
};


let allQuestions = Object.keys(questions)
console.log(allQuestions)

function randomQuestion(questions) {
    const keys = Object.values(questions);
    const questionNumber = Math.floor(Math.random() * keys.length)
    console.log(questionNumber)
    const actualQuestion = keys[questionNumber]
    delete questions[questionNumber]
    console.log(questions)
  
  
    question.textContent = actualQuestion[0]
    choice1.textContent = actualQuestion[1][0]
    choice2.textContent = actualQuestion[1][1]
    choice3.textContent = actualQuestion[1][2]
    choice4.textContent = actualQuestion[1][3]
}
randomQuestion(questions)


choice1.addEventListener('click', function() {
    if (choice1.textContent === actualQuestion[2]) {
        choice1.style.backgroundColor = 'green';
        header.textContent = 'Right answer!'
        header.style.color = 'green';
        next.style.animationName= 'show';
        next.style.animationDuration= '3s';
        next.style.animationFillMode= 'forwards';
        randomQuestion(questions)

    } else {
        choice1.style.backgroundColor = 'red';
        header.textContent = 'Wrong answer!'
        header.style.color = 'red';
    }
});

choice2.addEventListener('click', function() {
    if (choice2.textContent === actualQuestion[2]) {
        choice2.style.backgroundColor = 'green';
        header.textContent = 'Right answer!'
        header.style.color = 'green';
        next.style.animationName= 'show';
        next.style.animationDuration= '3s';
        next.style.animationFillMode= 'forwards';
        randomQuestion(questions)
    } else {
        choice2.style.backgroundColor = 'red';
        header.textContent = 'Wrong answer!'
        header.style.color = 'red';
    }
});

choice3.addEventListener('click', function() {
    if (choice3.textContent === actualQuestion[2]) {
        header.textContent = 'Right answer!'
        header.style.color = 'green';
        next.style.animationName= 'show';
        next.style.animationDuration= '3s';
        next.style.animationFillMode= 'forwards';
        randomQuestion(questions)
    } else {
        choice3.style.backgroundColor = 'red';
        header.textContent = 'Wrong answer!'
        header.style.color = 'red';
    }
});

choice4.addEventListener('click', function() {
    if (choice4.textContent === actualQuestion[2]) {
        header.textContent = 'Right answer!'
        header.style.color = 'green';
        next.style.animationName= 'show';
        next.style.animationDuration= '3s';
        next.style.animationFillMode= 'forwards';
        randomQuestion(questions)
    } else {
        choice4.style.backgroundColor = 'red';
        header.textContent = 'Wrong answer!'
        header.style.color = 'red';
    }
});

next.addEventListener('click', function() {

});


