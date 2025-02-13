// 1. Store Questions
const questions = [
    { 
        question: 'Which CSS property is used to change text color?', 
        options: ['font-color', 'text-color', 'color', 'foreground'], 
        answer: 'color' 
    },
    { 
        question: 'What is the default position value in CSS?', 
        options: ['relative', 'absolute', 'fixed', 'static'], 
        answer: 'static' 
    },
    { 
        question: 'Which unit is relative to the font-size of the element?', 
        options: ['px', 'em', 'vh', 'rem'], 
        answer: 'em' 
    },
    { 
        question: 'What will be the output of the following CSS?', 
        code: 'p {\n' +
              '    font-size: 20px;\n' +
              '}\n' +
              'body {\n' +
              '    font-size: 10px;\n' +
              '}\n' +
              'p {\n' +
              '    font-size: 2em;\n' +
              '}',
        options: ['20px', '10px', '40px', '2em'], 
        answer: '40px' 
    },
    { 
        question: 'Which CSS property controls the space inside an element’s border?', 
        options: ['margin', 'padding', 'spacing', 'border-spacing'], 
        answer: 'padding' 
    },

    { 
        question: 'Which CSS property is used to make text bold?', 
        options: ['font-weight', 'text-bold', 'bold', 'font-style'], 
        answer: 'font-weight' 
    },
    { 
        question: 'Which CSS property is used to center an element horizontally?', 
        options: ['text-align', 'margin', 'align', 'center'], 
        answer: 'margin' 
    },
    { 
        question: 'What will the following CSS do?', 
        code: 'div {\n' +
              '    display: flex;\n' +
              '    justify-content: center;\n' +
              '    align-items: center;\n' +
              '}',
        options: ['Aligns content to the left', 'Centers content both vertically and horizontally', 'Justifies content to the right', 'Does nothing'], 
        answer: 'Centers content both vertically and horizontally' 
    },
    { 
        question: 'Which selector targets all &lt;p&gt; elements inside a &lt;div&gt;?', 
        options: ['div > p', 'div p', 'div, p', '.div p'], 
        answer: 'div p' 
    },
    { 
        question: 'Which CSS property makes an element invisible without removing it from the document flow?', 
        options: ['display: none;', 'visibility: hidden;', 'opacity: 0;', 'hidden: true;'], 
        answer: 'visibility: hidden;' 
    },

    { 
        question: 'What does `z-index` control in CSS?', 
        options: ['Font size', 'Stacking order', 'Text alignment', 'Box model'], 
        answer: 'Stacking order' 
    },
    { 
        question: 'Which value makes an element fill the entire width of its container?', 
        options: ['100%', 'auto', 'inherit', 'fill'], 
        answer: '100%' 
    },
    { 
        question: 'What is the output of the following CSS?', 
        code: 'div {\n' +
              '    width: 200px;\n' +
              '    height: 100px;\n' +
              '    overflow: hidden;\n' +
              '}',
        options: ['Hides overflowing content', 'Expands to fit content', 'Shows scrollbars', 'Nothing happens'], 
        answer: 'Hides overflowing content' 
    },
    { 
        question: 'Which CSS property is used to apply an image as a background?', 
        options: ['background-image', 'background', 'image', 'img-src'], 
        answer: 'background-image' 
    },
    { 
        question: 'Which CSS property creates a smooth transition effect?', 
        options: ['animation', 'transition', 'transform', 'timing-function'], 
        answer: 'transition' 
    },

    { 
        question: 'Which CSS value makes an element fully transparent?', 
        options: ['opacity: 1;', 'opacity: 0;', 'visibility: hidden;', 'display: none;'], 
        answer: 'opacity: 0;' 
    },
    { 
        question: 'Which of the following will create a fixed navigation bar?', 
        code: 'nav {\n' +
              '    position: fixed;\n' +
              '    top: 0;\n' +
              '    width: 100%;\n' +
              '}',
        options: ['Fixes the nav at the top', 'Centers the nav', 'Creates a floating sidebar', 'Hides the nav'], 
        answer: 'Fixes the nav at the top' 
    },
    { 
        question: 'Which selector targets all &lt;a&gt; elements that are hovered over?', 
        options: ['a:hover', 'a:active', 'a:focus', 'a:link'], 
        answer: 'a:hover' 
    },
    { 
        question: 'Which property is used to round the corners of a box?', 
        options: ['corner-radius', 'border-radius', 'box-rounding', 'radius'], 
        answer: 'border-radius' 
    },
    { 
        question: 'Which display value is used to create a flexbox container?', 
        options: ['inline', 'block', 'grid', 'flex'], 
        answer: 'flex' 
    },

    { 
        question: 'Which CSS property is used to set the gap between flex items?', 
        options: ['space-between', 'flex-gap', 'gap', 'margin'], 
        answer: 'gap' 
    },
    { 
        question: 'What does `position: absolute;` do?', 
        options: ['Positions element relative to the viewport', 'Positions element relative to the nearest positioned ancestor', 'Centers the element', 'Hides the element'], 
        answer: 'Positions element relative to the nearest positioned ancestor' 
    },
    { 
        question: 'Which property makes text appear in all uppercase letters?', 
        options: ['text-transform', 'uppercase', 'font-case', 'letter-case'], 
        answer: 'text-transform' 
    },
    { 
        question: 'What does `display: grid;` do?', 
        options: ['Creates a grid layout', 'Centers content', 'Hides elements', 'Nothing'], 
        answer: 'Creates a grid layout' 
    },
    { 
        question: 'Which CSS function is used to rotate an element?', 
        options: ['rotate()', 'transform()', 'translate()', 'skew()'], 
        answer: 'rotate()' 
    },

    // Additional questions
    { 
        question: 'Which pseudo-class targets the first child of an element?', 
        options: [':first-of-type', ':nth-child(1)', ':first-child', ':only-child'], 
        answer: ':first-child' 
    },
    { 
        question: 'Which CSS property is used to control the spacing between letters?', 
        options: ['letter-spacing', 'word-spacing', 'line-height', 'spacing'], 
        answer: 'letter-spacing' 
    },
    { 
        question: 'Which CSS property is used to make an element responsive?', 
        options: ['max-width', 'min-width', 'responsive', 'width'], 
        answer: 'max-width' 
    },
    { 
        question: 'Which CSS property is used to set an element’s visibility without removing its space?', 
        options: ['display', 'opacity', 'visibility', 'z-index'], 
        answer: 'visibility' 
    }
];

// 2. Shuffle Questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 3. Setup Quiz Variables
let previouslyIncorrect = new Set();
let shuffledQuestions = [...questions];
shuffleArray(shuffledQuestions);
let currentQuestionIndex = 0;
let correctAnswers = 0;
let uniqueQuestionsSeen = 0;
let uniqueCorrectQuestions = new Set(); 
let incorrectQuestions = [];
let uniqueQuestionsSet = new Set(); 

// 4. Select Elements
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const nextButton = document.getElementById("next-button");

// Create Score Tracker
const scoreTracker = document.createElement("p");
scoreTracker.id = "score-tracker";
document.getElementById("quiz-container").appendChild(scoreTracker);

// 5. Function to Display a Question
function displayQuestion() {
    if (shuffledQuestions.length === 0) {
        // ✅ Only ends when ALL questions are correctly answered
        questionText.innerText = `You've finished all of our questions! Refresh to play again!`;
        answerOptions.innerHTML = "";
        nextButton.style.display = "none";
        scoreTracker.innerText = `Final Score: ${correctAnswers} / ${uniqueQuestionsSeen} (${((correctAnswers / Math.max(uniqueQuestionsSeen, 1)) * 100).toFixed(2)}%)`;
        return;
    }

    nextButton.style.display = "none";

    // Reset the current question index if necessary
    if (currentQuestionIndex >= shuffledQuestions.length) {
        currentQuestionIndex = 0;
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    let questionHTML = "";
    
    if (previouslyIncorrect.has(currentQuestion.question)) {
        document.getElementById("quiz-container").style.backgroundColor = "rgba(255, 0, 0, 0.1)"; // Light red tint
    } else {
        document.getElementById("quiz-container").style.backgroundColor = ""; // Reset to default
    }
    
    questionHTML += `${currentQuestion.question}<br><br>`;
    
    if (currentQuestion.code) {
        questionHTML += `<div class="code-example">
    <pre><code>${currentQuestion.code}</code></pre>
</div>`;
    }
    
    questionText.innerHTML = questionHTML;
    
    answerOptions.innerHTML = "";

    // Create answer buttons
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-button");
        button.onclick = () => selectAnswer(button, currentQuestion.answer);
        answerOptions.appendChild(button);
    });
}

// 6. Handle Answer Selection
function selectAnswer(button, correctAnswer) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    // ✅ Track unique questions seen (only adds the first time)
    uniqueQuestionsSet.add(currentQuestion.question);
    
    // ✅ Increase total unique questions seen (Y)
    uniqueQuestionsSeen++;

    if (button.innerText === correctAnswer) {
        button.style.backgroundColor = "lightgreen"; // Correct answer
        correctAnswers++; // Increase total correct answers (X)

        // ✅ Only increase unique correct count if this is the first correct attempt
        if (!uniqueCorrectQuestions.has(currentQuestion.question)) {
            uniqueCorrectQuestions.add(currentQuestion.question);
        }

        // ✅ Remove this question from the game entirely (it has been answered correctly)
        shuffledQuestions.splice(currentQuestionIndex, 1);
    } else {
        button.style.backgroundColor = "lightcoral"; // Wrong answer

        // Highlight correct answer
        Array.from(answerOptions.children).forEach(btn => {
            if (btn.innerText === correctAnswer) {
                btn.style.backgroundColor = "lightgreen";
            }
        });

        previouslyIncorrect.add(currentQuestion.question);
        const incorrectQuestion = shuffledQuestions.splice(currentQuestionIndex, 1)[0];
        const randomIndex = Math.floor(Math.random() * shuffledQuestions.length);
        shuffledQuestions.splice(randomIndex, 0, incorrectQuestion);
    }

    // Disable all answer buttons
    Array.from(answerOptions.children).forEach(btn => btn.disabled = true);

    // ✅ Show the "Next" button after an answer is selected
    nextButton.style.display = "block"; 

    // Update score
    updateScore();
}

// 7. Next Button Functionality
nextButton.addEventListener("click", () => {
    // ✅ Check if a question was answered
    const answered = Array.from(answerOptions.children).some(btn => btn.disabled);

    if (!answered) {
        // User skipped the question → Store it to show later
        incorrectQuestions.push(shuffledQuestions[currentQuestionIndex]);
    }

    // Move to the next question
    currentQuestionIndex++;
    displayQuestion();
});

// 8. Update Score Functionality
function updateScore() {
    scoreTracker.innerHTML = `
    Correct Answers: ${correctAnswers} / ${uniqueQuestionsSeen} <br>
    Score Percentage: ${((uniqueCorrectQuestions.size / Math.max(uniqueQuestionsSet.size, 1)) * 100).toFixed(2)}%
`;
}

// 9. Initialize Quiz
displayQuestion();

// 1️⃣ Select the Toggle Button
const themeToggle = document.getElementById("theme-toggle");

// 2️⃣ Check Local Storage for Theme Preference (Default to Dark)
const currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);

// 3️⃣ Update Button Text Based on Theme
themeToggle.innerText = currentTheme === "dark" ? "☀️" : "🌙";

// 4️⃣ Toggle Theme on Button Click
themeToggle.addEventListener("click", () => {
    let newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    
    // Apply Theme
    document.documentElement.setAttribute("data-theme", newTheme);
    
    // Save to Local Storage
    localStorage.setItem("theme", newTheme);

    // Update Button Text
    themeToggle.innerText = newTheme === "dark" ? "☀️" : "🌙";
});