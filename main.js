const quizData = [
    {
        words: ["Happy", "Joyful", "Cheerful", "Sad", "Merry"],
        answer: "Sad",
        synonymGroup: "Words related to happiness"
    },
    {
        words: ["Brave", "Courageous", "Fearless", "Timid", "Daring"],
        answer: "Timid",
        synonymGroup: "Words related to bravery"
    },
    {
        words: ["Fast", "Quick", "Rapid", "Slow", "Swift"],
        answer: "Slow",
        synonymGroup: "Words related to speed"
    },
    {
        words: ["Huge", "Enormous", "Gigantic", "Tiny", "Massive"],
        answer: "Tiny",
        synonymGroup: "Words related to size"
    },
    {
        words: ["Bright", "Luminous", "Radiant", "Dim", "Shining"],
        answer: "Dim",
        synonymGroup: "Words related to brightness"
    }
];

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const historyList = document.getElementById("history-list");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.style.display = "none";
    showQuestion();
}

function showQuestion() {
    const question = quizData[currentQuestionIndex];
    questionText.innerText = `Which word is the odd one out?`;
    optionsContainer.innerHTML = "";

    question.words.forEach(word => {
        const button = document.createElement("button");
        button.innerText = word;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(word, question.answer));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedWord, correctAnswer) {
    const options = optionsContainer.children;
    let isCorrect = selectedWord === correctAnswer;

    if (isCorrect) {
        score++;
    }

    updateHistory(quizData[currentQuestionIndex], selectedWord, isCorrect);

    Array.from(options).forEach(button => {
        button.disabled = true;
        if (button.innerText === correctAnswer) {
            button.classList.add("correct");
        } else if (button.innerText === selectedWord) {
            button.classList.add("incorrect");
        }
    });

    nextBtn.style.display = "block";
}

function updateHistory(question, selectedWord, isCorrect) {
    const historyItem = document.createElement("li");
    historyItem.classList.add("history-item", isCorrect ? "correct" : "incorrect");

    historyItem.innerHTML = `
        <p><strong>Question:</strong> ${question.synonymGroup}</p>
        <p><strong>Your Answer:</strong> ${selectedWord}</p>
        <p><strong>Correct Answer:</strong> ${question.answer}</p>
    `;

    historyList.appendChild(historyItem);
    historyList.scrollTop = historyList.scrollHeight; 
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
        nextBtn.style.display = "none";
        Array.from(optionsContainer.children).forEach(button => {
            button.disabled = false;
            button.classList.remove("correct", "incorrect");
        });
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionText.innerText = `Quiz Finished!`;
    optionsContainer.innerHTML = `<p class="final-score">You scored ${score} out of ${quizData.length}</p>`;
    nextBtn.innerText = "Restart Quiz";
    nextBtn.style.display = "block";
    nextBtn.onclick = () => {
        historyList.innerHTML = ""; 
        startQuiz();
        nextBtn.innerText = "Next Question";
        nextBtn.onclick = handleNextButton;
    };
}

nextBtn.addEventListener("click", handleNextButton);

startQuiz();

// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const docElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = docElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        docElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
    } else {
        docElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    docElement.setAttribute('data-theme', savedTheme);
}

