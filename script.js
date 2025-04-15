let currentQuestion = 0;
let score = 0;
const questions = [
    {
        question: "What is the chord played?",
        answers: ["C Major", "D Major", "E Major", "F Major"],
        correct: 0
    },
    {
        question: "What is the chord played?",
        answers: ["A Minor", "B Minor", "C Major", "D Major"],
        correct: 2
    }
    // Add more questions as needed
];

const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons').children;
const endContainer = document.getElementById('end-container');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

function startGame() {
    startButton.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = question.answers[i];
        answerButtons[i].addEventListener('click', checkAnswer);
    }
}

function checkAnswer(event) {
    const selectedAnswer = event.target;
    const question = questions[currentQuestion];
    const correctAnswerIndex = question.correct;

    if (selectedAnswer.textContent === question.answers[correctAnswerIndex]) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    questionContainer.classList.add('hidden');
    endContainer.classList.remove('hidden');
    scoreDisplay.textContent = score;
}

function restartGame() {
    score = 0;
    currentQuestion = 0;
    endContainer.classList.add('hidden');
    startButton.classList.remove('hidden');
}
