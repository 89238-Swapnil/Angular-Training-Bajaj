let questions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 20; 

const questionNumberEl = document.getElementById('question-number'); 
const questionEl = document.getElementById('question'); 
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const quizBox = document.getElementById('quiz-box');
const restartBtn = document.getElementById('restart-btn');


const timerEl = document.createElement('p');
timerEl.id = 'timer';
timerEl.style.fontWeight = 'bold';
timerEl.style.margin = '10px 0';
quizBox.insertBefore(timerEl, optionsEl);

async function fetchQuiz() {
  try {
    const res = await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple');
    const data = await res.json();
    questions = data.results.map(q => ({
      question: decodeHTML(q.question),
      options: shuffle([...q.incorrect_answers.map(decodeHTML), decodeHTML(q.correct_answer)]),
      answer: decodeHTML(q.correct_answer)
    }));
    currentIndex = 0;
    score = 0;
    showQuestion();
    quizBox.classList.remove('hidden');
    resultEl.classList.add('hidden');
  } catch (error) {
    questionEl.textContent = 'Failed to load questions. Please try again.';
    console.error(error);
  }
}

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
  clearInterval(timer);
  timeLeft = 20;
  timerEl.textContent = `Time left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      
      currentIndex++;
      if(currentIndex < questions.length){
        showQuestion();
      } else {
        showResult();
      }
    }
  }, 1000);

  const q = questions[currentIndex];
  questionNumberEl.textContent = `Question ${currentIndex + 1} / ${questions.length}`;
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => selectOption(btn, option));
    optionsEl.appendChild(btn);
  });
  nextBtn.disabled = true;
}

function selectOption(btn, option) {
  clearInterval(timer); 
  const correctAnswer = questions[currentIndex].answer;
  const allBtns = optionsEl.querySelectorAll('button');
  allBtns.forEach(b => b.disabled = true);

  if(option === correctAnswer){
    btn.classList.add('correct');
    score++;
  } else {
    btn.classList.add('wrong');
    allBtns.forEach(b => {
      if(b.textContent === correctAnswer) b.classList.add('correct');
    });
  }
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if(currentIndex < questions.length){
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  clearInterval(timer);
  quizBox.classList.add('hidden');
  resultEl.classList.remove('hidden');
  scoreEl.textContent = `${score} / ${questions.length}`;
}

restartBtn.addEventListener('click', () => {
  fetchQuiz();
});

fetchQuiz();
