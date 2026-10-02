// MBBS Physiology Exam Portal - Main Script

// State
let questionBank = [];
let currentExam = null;
let currentQuestion = 0;
let answers = {};
let timerInterval = null;
let timeRemaining = 2 * 60 * 60; // 2 hours in seconds
let examStartTime = null;
let examResults = null;

// DOM Elements
const screens = {
    welcome: document.getElementById('welcomeScreen'),
    exam: document.getElementById('examScreen'),
    results: document.getElementById('resultsScreen'),
    review: document.getElementById('reviewScreen')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadQuestionBank();
});

// Load question bank from JSON
async function loadQuestionBank() {
    try {
        showLoading(true);
        const response = await fetch('question_bank.json');
        if (!response.ok) throw new Error('Failed to load question bank');
        questionBank = await response.json();
        console.log(`Loaded ${questionBank.length} questions`);
        const badge = document.getElementById('questionCountBadge');
        if (badge) badge.textContent = `${questionBank.length} Questions`;
        renderExamGrid();
    } catch (error) {
        console.error('Error loading question bank:', error);
        alert('Failed to load question bank. Please make sure question_bank.json exists.');
    } finally {
        showLoading(false);
    }
}

// Show/hide loading overlay
function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    if (show) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

// Switch screens
function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Render exam selection grid
function renderExamGrid() {
    const grid = document.getElementById('examGrid');
    const exams = createExams();

    grid.innerHTML = exams.map((exam, index) => {
        const status = getExamStatus(index);
        return `
            <div class="exam-card" onclick="startExam(${index})">
                <h3>${exam.name}</h3>
                <div class="exam-meta">
                    <span>Questions: ${exam.questions.length}</span>
                    <span>Duration: 2 Hours</span>
                    <span>Marks: ${exam.questions.length}</span>
                </div>
                <span class="exam-status ${status.class}">${status.text}</span>
            </div>
        `;
    }).join('');
}

// Create 4 exams from the question bank, split evenly across all questions
function createExams() {
    const exams = [];
    const total = questionBank.length;
    const numExams = 4;
    const base = Math.floor(total / numExams);
    const rem = total % numExams;
    const examSizes = Array.from({ length: numExams }, (_, i) => base + (i < rem ? 1 : 0));

    // Shuffle all questions
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);

    let startIndex = 0;
    for (let i = 0; i < examSizes.length; i++) {
        const size = examSizes[i];
        const examQuestions = shuffled.slice(startIndex, startIndex + size);
        exams.push({
            name: `Exam ${i + 1}`,
            questions: examQuestions
        });
        startIndex += size;
    }

    return exams;
}

// Get exam status from localStorage
function getExamStatus(examIndex) {
    const results = JSON.parse(localStorage.getItem('examResults') || '{}');
    if (results[examIndex]) {
        return { class: 'completed', text: 'Completed' };
    }
    const inProgress = JSON.parse(localStorage.getItem('examInProgress') || '{}');
    if (inProgress[examIndex]) {
        return { class: 'in-progress', text: 'In Progress' };
    }
    return { class: 'not-started', text: 'Not Started' };
}

// Start an exam
function startExam(examIndex) {
    const exams = createExams();
    currentExam = exams[examIndex];
    currentExam.index = examIndex;
    currentQuestion = 0;
    answers = {};
    timeRemaining = 2 * 60 * 60; // Reset to 2 hours
    examStartTime = Date.now();

    // Save progress
    saveExamProgress();

    // Update UI
    document.getElementById('examTitle').textContent = currentExam.name;
    renderQuestion();
    renderQuestionGrid();
    updateTimer();
    startTimer();

    showScreen('exam');
}

// Save exam progress to localStorage
function saveExamProgress() {
    const inProgress = JSON.parse(localStorage.getItem('examInProgress') || '{}');
    inProgress[currentExam.index] = {
        answers: answers,
        currentQuestion: currentQuestion,
        timeRemaining: timeRemaining,
        examStartTime: examStartTime
    };
    localStorage.setItem('examInProgress', JSON.stringify(inProgress));
}

// Render current question
function renderQuestion() {
    const q = currentExam.questions[currentQuestion];
    if (!q) return;

    document.getElementById('questionCounter').textContent =
        `Question ${currentQuestion + 1} of ${currentExam.questions.length}`;
    document.getElementById('questionNumber').textContent = `Q${currentQuestion + 1}`;
    document.getElementById('questionText').textContent = q.question;

    const container = document.getElementById('optionsContainer');
    const letters = ['A', 'B', 'C', 'D'];

    container.innerHTML = q.options.map((opt, i) => {
        const isSelected = answers[currentQuestion] === i;
        return `
            <div class="option ${isSelected ? 'selected' : ''}" onclick="selectOption(${i})">
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${opt}</span>
            </div>
        `;
    }).join('');

    updateNavigation();
}

// Render question grid navigator
function renderQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    grid.innerHTML = currentExam.questions.map((_, i) => {
        const isAnswered = answers[i] !== undefined;
        const isCurrent = i === currentQuestion;
        return `
            <div class="q-num ${isAnswered ? 'answered' : ''} ${isCurrent ? 'current' : ''}"
                 onclick="navigateToQuestion(${i})">
                ${i + 1}
            </div>
        `;
    }).join('');
}

// Select an option
function selectOption(optionIndex) {
    answers[currentQuestion] = optionIndex;
    renderQuestion();
    renderQuestionGrid();
    saveExamProgress();
}

// Navigate to a specific question
function navigateToQuestion(index) {
    if (index < 0 || index >= currentExam.questions.length) return;
    currentQuestion = index;
    renderQuestion();
    renderQuestionGrid();
    saveExamProgress();
}

// Update navigation buttons
function updateNavigation() {
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled =
        currentQuestion === currentExam.questions.length - 1;
}

// Timer functions
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimer();

        if (timeRemaining <= 0) {
            submitExam();
        }
    }, 1000);
}

function updateTimer() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const timerEl = document.getElementById('timer');
    const timerText = document.getElementById('timerText');

    timerText.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Visual warnings
    if (timeRemaining <= 300) { // 5 minutes
        timerEl.className = 'timer danger';
    } else if (timeRemaining <= 900) { // 15 minutes
        timerEl.className = 'timer warning';
    } else {
        timerEl.className = 'timer';
    }
}

// Show submit confirmation
function showSubmitConfirmation() {
    const answered = Object.keys(answers).length;
    const total = currentExam.questions.length;
    const unanswered = total - answered;

    document.getElementById('submitMessage').textContent =
        `You have answered ${answered} out of ${total} questions. ${unanswered} questions are unanswered. Are you sure you want to submit?`;

    document.getElementById('submitModal').classList.add('active');
}

// Close submit modal
function closeSubmitModal() {
    document.getElementById('submitModal').classList.remove('active');
}

// Submit exam
function submitExam() {
    clearInterval(timerInterval);
    closeSubmitModal();

    // Calculate score
    let correct = 0;
    const reviewData = [];

    currentExam.questions.forEach((q, i) => {
        const userAnswer = answers[i];
        const isCorrect = userAnswer === q.correct;
        if (isCorrect) correct++;

        reviewData.push({
            question: q.question,
            options: q.options,
            correct: q.correct,
            userAnswer: userAnswer,
            isCorrect: isCorrect
        });
    });

    examResults = {
        examName: currentExam.name,
        examIndex: currentExam.index,
        totalQuestions: currentExam.questions.length,
        correct: correct,
        score: correct,
        percentage: Math.round((correct / currentExam.questions.length) * 100),
        timeUsed: (2 * 60 * 60) - timeRemaining,
        review: reviewData
    };

    // Save results
    const allResults = JSON.parse(localStorage.getItem('examResults') || '{}');
    allResults[currentExam.index] = {
        score: correct,
        percentage: examResults.percentage,
        date: new Date().toISOString()
    };
    localStorage.setItem('examResults', JSON.stringify(allResults));

    // Clear in-progress
    const inProgress = JSON.parse(localStorage.getItem('examInProgress') || '{}');
    delete inProgress[currentExam.index];
    localStorage.setItem('examInProgress', JSON.stringify(inProgress));

    showResults();
}

// Show results screen
function showResults() {
    if (!examResults) return;

    // Update exam name badge
    document.getElementById('examNameBadge').textContent = examResults.examName;

    // Update score circle
    document.getElementById('scoreText').textContent =
        `${examResults.score}/${examResults.totalQuestions}`;
    document.getElementById('scorePercent').textContent =
        `${examResults.percentage}%`;

    // Calculate grade
    const grade = calculateGrade(examResults.percentage);
    document.getElementById('gradeBadge').textContent = `Grade: ${grade.letter}`;
    document.getElementById('gradeBadge').className = `grade-badge ${grade.class}`;

    // Performance message
    document.getElementById('performanceMessage').textContent = grade.message;

    // Calculate stats
    const answered = Object.keys(answers).length;
    const incorrect = answered - examResults.correct;
    const unanswered = examResults.totalQuestions - answered;

    // Update stats
    document.getElementById('resultStats').innerHTML = `
        <div class="stat-item">
            <div class="stat-value" style="color: var(--success)">${examResults.correct}</div>
            <div class="stat-label">Correct</div>
        </div>
        <div class="stat-item">
            <div class="stat-value" style="color: var(--danger)">${incorrect}</div>
            <div class="stat-label">Incorrect</div>
        </div>
        <div class="stat-item">
            <div class="stat-value" style="color: var(--warning)">${unanswered}</div>
            <div class="stat-label">Unanswered</div>
        </div>
    `;

    // Update score breakdown
    const timeUsed = formatTime(examResults.timeUsed);
    const timeRemaining = formatTime((2 * 60 * 60) - examResults.timeUsed);
    const accuracy = answered > 0 ? Math.round((examResults.correct / answered) * 100) : 0;

    document.getElementById('scoreBreakdown').innerHTML = `
        <div class="breakdown-item">
            <span class="breakdown-label">Total Marks</span>
            <span class="breakdown-value">${examResults.totalQuestions}</span>
        </div>
        <div class="breakdown-item">
            <span class="breakdown-label">Marks Obtained</span>
            <span class="breakdown-value">${examResults.score}</span>
        </div>
        <div class="breakdown-item">
            <span class="breakdown-label">Accuracy</span>
            <span class="breakdown-value">${accuracy}%</span>
        </div>
        <div class="breakdown-item">
            <span class="breakdown-label">Time Used</span>
            <span class="breakdown-value">${timeUsed}</span>
        </div>
        <div class="breakdown-item">
            <span class="breakdown-label">Time Remaining</span>
            <span class="breakdown-value">${timeRemaining}</span>
        </div>
    `;

    showScreen('results');
}

// Calculate grade based on percentage
function calculateGrade(percentage) {
    if (percentage >= 90) return { letter: 'A+', class: 'grade-a-plus', message: 'Outstanding! Exceptional performance!' };
    if (percentage >= 80) return { letter: 'A', class: 'grade-a', message: 'Excellent! Great job!' };
    if (percentage >= 70) return { letter: 'B+', class: 'grade-b-plus', message: 'Very good! Keep it up!' };
    if (percentage >= 60) return { letter: 'B', class: 'grade-b', message: 'Good! You can do even better!' };
    if (percentage >= 50) return { letter: 'C', class: 'grade-c', message: 'Satisfactory. Keep practicing!' };
    if (percentage >= 40) return { letter: 'D', class: 'grade-d', message: 'Needs improvement. Study more!' };
    return { letter: 'F', class: 'grade-f', message: 'Failed. Please review and retake!' };
}

// Format time in seconds to HH:MM:SS
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Review exam answers
function reviewExam() {
    if (!examResults) return;

    const content = document.getElementById('reviewContent');
    const letters = ['A', 'B', 'C', 'D'];

    content.innerHTML = examResults.review.map((item, i) => {
        const optionsHtml = item.options.map((opt, j) => {
            let className = 'review-option';
            if (j === item.correct) className += ' correct';
            if (j === item.userAnswer && j !== item.correct) className += ' incorrect selected';
            if (j === item.userAnswer && j === item.correct) className += ' selected';

            return `<div class="${className}">${letters[j]}. ${opt}</div>`;
        }).join('');

        return `
            <div class="review-item ${item.isCorrect ? 'correct' : 'incorrect'}">
                <div class="review-question">Q${i + 1}. ${item.question}</div>
                <div class="review-options">${optionsHtml}</div>
            </div>
        `;
    }).join('');

    showScreen('review');
}

// Go back to home screen
function goHome() {
    examResults = null;
    currentExam = null;
    clearInterval(timerInterval);
    renderExamGrid();
    showScreen('welcome');
}
