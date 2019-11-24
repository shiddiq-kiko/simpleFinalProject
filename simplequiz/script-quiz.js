var simpleQuestion = [
    {
        question : 'What is Capital City of Somalia?',
        answers :{
            A : 'Ulan Batar',
            B : 'Mogadishu',
            C : 'Lima',
            D : 'Islamabad'
        },
        correctAnswer : 'B'
    },
    {
        question : 'What is Capital City of Tanzania?',
        answers :{
            A : 'Ulan Batar',
            B : 'Kingston',
            C : 'Dar es sallam',
            D : 'Nairobi'
        },
        correctAnswer : 'C'
    },
    {
        question : 'What is Capital City of kenya?',
        answers :{            
            A : 'Kingston',
            B : 'Dar es sallam',
            C : 'Nairobi',
            D : 'Ulan Batar'
        },
        correctAnswer : 'C'
    },
    {
        question : 'What is Capital City of Mongolia?',
        answers : {
            A : 'Ulan Batar',
            B : 'Nairobi',
            C : 'Kingston',
            D : 'Dar es sallam'
        },
        correctAnswer : 'A'
    },
    {
        question : 'What is Capital City of Jamaica?',
        answers :{
            A : 'Ulan Batar',
            B : 'Kingston',
            C : 'Nairobi',
            D : 'Dar es sallam'
        },
        correctAnswer : 'B'
    },
    {
        question : 'Who is main Heroine of Fate Stay Night?',
        answers :{
            A : 'Artoria Pendragon',
            B : 'Rin Tohsaka',
            C : 'Sakura Matou',
            D : 'Marlyn Monroe',
        },
        correctAnswer : 'A'
    },
    {
        question : 'Who is the first President of Indonesia?',
        answers :{
            A : 'Ahmad Yani',
            B : 'Ir Soekarno',
            C : 'Muhammad Hatta',
            D : 'Sutan Sjahrir'
        },
        correctAnswer : 'B'
    },
    {
        question : 'Who is the first Vice President of Indonesia?',
        answers :{
            A : 'Ahmad Yani',
            B : 'Ir Soekarno',
            C : 'Muhammad Hatta',
            D : 'Sutan Sjahrir'
        },
        correctAnswer : 'C'
    },
    {
        question : 'Who is the second President of Indonesia?',
        answers :{
            A : 'BJ Habibie',
            B : 'Gen. Sudirman',
            C : 'Tri Sutrisno',
            D : 'Soeharto'
        },
        correctAnswer : 'D'
    },
    {
        question : 'Who is the third Vice President of Indonesia?',
        answers :{
            A : 'Adam Malik',
            B : 'Tri Sutrisno',
            C : 'Sudharmono',
            D : 'Boediono'
        },
        correctAnswer : 'A'
    }
];

function buildQuiz() {
    var output = [];
    simpleQuestion.forEach((currentQuestion, questionNumber) => {
    var answers = [];
    for (var letter in currentQuestion.answers) {
        answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
            );
        }
        output.push(
            `<div class= "slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
            </div>`
            );
        });
    quizContainer.innerHTML = output.join("");
}
        
function showResults() {
    var answerContainers = quizContainer.querySelectorAll(".answers");
    var numCorrect = 0;
    simpleQuestion.forEach((currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = "darkgreen";
        } else {
            answerContainers[questionNumber].style.color = "red";
        }
    });
    if(numCorrect === 10){
        resultsContainer.innerHTML = `Perfecto, ${numCorrect} out of ${simpleQuestion.length}`;
    }else if(numCorrect < 10 && numCorrect >= 8){
        resultsContainer.innerHTML = `Good Job, ${numCorrect} out of ${simpleQuestion.length}`;
    }else if(numCorrect < 8 && numCorrect >= 7){
        resultsContainer.innerHTML = `Almost There, ${numCorrect} out of ${simpleQuestion.length}`;
    }else if(numCorrect < 7 && numCorrect >= 5){
        resultsContainer.innerHTML = `It not that simple it is, ${numCorrect} out of ${simpleQuestion.length}`;
    }else if(numCorrect < 5 && numCorrect > 0){
        resultsContainer.innerHTML = `Back to School you must, ${numCorrect} out of ${simpleQuestion.length}`;
    }else{
        resultsContainer.innerHTML = `Why even try, ${numCorrect} out of ${simpleQuestion.length}`;
    }
}
        
function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

buildQuiz();
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;
showSlide(0);

submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);