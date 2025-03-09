let cssBasicsQuestions = [];
let totalQuestions = 0;

fetch("questions.json")
  .then(response => response.json())
  .then(data => {
    cssBasicsQuestions = [...data];
    shuffleQuestions = [...data];
  })
  .catch(error => console.error("❌ ERROR: Failed to load questions!", error));
const cssChapters = [
    {
        chapter: "CSS Basics",
        topics: [
            { topic: "Introduction to CSS", id: "css-introduction" },
            { topic: "CSS Syntax & Selectors", id: "css-selectors" },
            { topic: "CSS Colors & Backgrounds", id: "css-colors-backgrounds" },
            { topic: "Text Styling & Fonts", id: "css-text-styling" }
        ]
    },
    {
        chapter: "CSS Box Model & Layout",
        topics: [
            { topic: "Box Model", id: "css-box-model" },
            { topic: "Margins, Padding & Borders", id: "css-spacing" },
            { topic: "Width, Height & Overflow", id: "css-sizing-overflow" }
        ]
    },
    {
        chapter: "CSS Display & Positioning",
        topics: [
            { topic: "CSS Display", id: "css-display" },
            { topic: "CSS Positioning", id: "css-positioning" },
            { topic: "Float & Clear", id: "css-float-clear" },
            { topic: "Z-Index & Stacking Context", id: "css-z-index" }
        ]
    },
    {
        chapter: "CSS Flexbox",
        topics: [
            { topic: "Introduction to Flexbox", id: "css-flexbox-intro" },
            { topic: "Flexbox Properties", id: "css-flexbox-properties" },
            { topic: "Flexbox Alignment & Justification", id: "css-flexbox-alignment" }
        ]
    },
    {
        chapter: "CSS Grid",
        topics: [
            { topic: "Introduction to Grid", id: "css-grid-intro" },
            { topic: "Grid Template & Areas", id: "css-grid-template" },
            { topic: "Grid Alignment & Justification", id: "css-grid-alignment" }
        ]
    },
    {
        chapter: "CSS Styling & Effects",
        topics: [
            { topic: "Shadows & Borders", id: "css-shadows-borders" },
            { topic: "Gradients", id: "css-gradients" },
            { topic: "CSS Transitions", id: "css-transitions" },
            { topic: "CSS Animations", id: "css-animations" },
            { topic: "Transformations (Rotate, Scale, Skew)", id: "css-transforms" }
        ]
    },
    {
        chapter: "Responsive Design",
        topics: [
            { topic: "CSS Media Queries", id: "css-media-queries" },
            { topic: "Mobile-First Design", id: "css-mobile-first" },
            { topic: "CSS Viewport Units", id: "css-viewport-units" }
        ]
    },
    {
        chapter: "Advanced CSS",
        topics: [
            { topic: "Custom Properties (CSS Variables)", id: "css-variables" },
            { topic: "CSS Preprocessors (SASS & LESS)", id: "css-preprocessors" },
            { topic: "CSS Specificity & Inheritance", id: "css-specificity-inheritance" },
            { topic: "CSS Pseudo-Elements & Pseudo-Classes", id: "css-pseudo-elements" }
        ]
    }
];


// ✅ Select Elements
const mainContainer = document.getElementById("gridContainer");
const topicButtons = document.querySelectorAll(".topic-button");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const nextButton = document.getElementById("next-button");
const returnToMenuButton = document.getElementById("return-to-menu");

// ✅ Create Back to Menu Button
const backToMenuButton = document.createElement("button");
backToMenuButton.innerText = "Back to Menu";
backToMenuButton.id = "back-to-menu";
backToMenuButton.style.display = "none";

// ✅ Wrap Buttons in a Div
const buttonWrapper = document.createElement("div");
buttonWrapper.id = "quiz-buttons";
buttonWrapper.style.display = "flex";
buttonWrapper.style.justifyContent = "space-between";
buttonWrapper.style.marginTop = "10px";
buttonWrapper.appendChild(backToMenuButton);
buttonWrapper.appendChild(nextButton);
buttonWrapper.appendChild(returnToMenuButton);
quizContainer.appendChild(buttonWrapper);

// ✅ Progress Bar & Tracker
const progressBar = document.createElement("progress");
progressBar.id = "progress-bar";
progressBar.value = 0;
progressBar.max = 100;
quizContainer.insertBefore(progressBar, questionText);

const progressTracker = document.createElement("p");
progressTracker.id = "progress-tracker";
quizContainer.insertBefore(progressTracker, questionText);

// ✅ Quiz Logic Variables
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let previouslyIncorrect = new Set();
let totalAnsweredQuestions = 0;

// ✅ Function to Shuffle Questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ✅ Function to Decode HTML Entities
function decodeHtmlEntities(str) {
    let txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
}

// ✅ Start Quiz When Clicking a Topic
topicButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedTopic = button.getAttribute("data-topic");
        currentTopicId = selectedTopic; // ✅ Ensure the topic is tracked

        shuffledQuestions = selectedTopic === "all"
            ? [...cssBasicsQuestions]
            : cssBasicsQuestions.filter(q => q.topic === selectedTopic);

            totalQuestions = shuffledQuestions.length; 
totalAnsweredQuestions = 0;
progressBar.value = 0;  
previouslyIncorrect.clear();  
correctAnswers = 0;  
updateProgress();  

        shuffleArray(shuffledQuestions);
        currentQuestionIndex = 0;

        mainContainer.style.display = "none";
        quizContainer.style.display = "block";
        returnToMenuButton.style.display = "none";
        backToMenuButton.style.display = "block";

        updateProgress();
        displayQuestion();
    });
});

// ✅ Back to Menu Button
backToMenuButton.addEventListener("click", () => {
    console.log("🔄 Returning to main grid... Resetting quiz.");

    // ✅ **Fully reset the quiz state**
    shuffledQuestions = [];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    previouslyIncorrect.clear();
    totalAnsweredQuestions = 0;
    
    // ✅ **Ensure topic ID resets** (Fixes second quiz issue)
    currentTopicId = null; 

    // ✅ **Clear quiz UI to prevent leftover elements**
    questionText.innerHTML = "Loading question...";
    answerOptions.innerHTML = ""; // ✅ Remove old answer buttons
    nextButton.style.display = "none"; 

    // ✅ **Ensure UI visibility is properly updated**
    quizContainer.style.display = "none";
    mainContainer.style.display = "grid";

    console.log("✅ Quiz fully reset, main menu restored.");
});

// ✅ Function to Update Progress Bar
function updateProgress() {
    console.log(`🔍 DEBUG: totalQuestions = ${totalQuestions}, totalAnsweredQuestions = ${totalAnsweredQuestions}`);

    if (totalQuestions === 0) {
        progressBar.value = 0;
        return;
    }

    const progressPercentage = (totalAnsweredQuestions / totalQuestions) * 100;
    progressBar.value = Math.min(progressPercentage, 100);
    console.log(`📊 Progress Updated: ${progressBar.value}%`);
}

// ✅ Function to Display a Question
function displayQuestion() {
    console.log("📌 DISPLAYING QUESTION:", currentQuestionIndex + 1, "of", shuffledQuestions.length);

    // ✅ **Check if `shuffledQuestions` has questions**
    if (shuffledQuestions.length === 0) {
        console.error("❌ ERROR: No questions available to display!");
        questionText.innerHTML = "Error: No questions available.";
        return;
    }

    if (currentQuestionIndex >= shuffledQuestions.length) {
        console.log("🚨 No more questions left, calling endQuiz()");
        endQuiz();
        return;
    }

    nextButton.style.display = "none";
    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    console.log("📝 Setting Question:", currentQuestion.question);

    // ✅ **Reset wasAnswered before showing a new question**
    shuffledQuestions[currentQuestionIndex].wasAnswered = false;

    // ✅ **Update Question Text**
    questionText.innerHTML = currentQuestion.question;
    
    // ✅ **Clear previous buttons to prevent event listener issues**
    answerOptions.innerHTML = ""; 

    // ✅ **Create new answer buttons**
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("answer-button");

        // ✅ **Ensure event listeners work properly (Fix for unclickable answers)**
        button.addEventListener("click", () => {
            console.log(`🖱 Clicked on: ${option}`);
            selectAnswer(button, currentQuestion.answer);
        });

        answerOptions.appendChild(button);
    });

    console.log("✅ New question displayed, answer buttons reset.");
}

// ✅ Handle Answer Selection
function selectAnswer(button, correctAnswer) {
    const selectedOption = decodeHtmlEntities(button.innerText.trim());
    const decodedCorrectAnswer = decodeHtmlEntities(correctAnswer.trim());

    console.log(`🖱 Answer Selected: ${selectedOption}`);
    console.log(`✅ Correct Answer: ${decodedCorrectAnswer}`);

    if (shuffledQuestions[currentQuestionIndex].wasAnswered) {
        console.log("⚠️ Question was already answered. Ignoring click.");
        return;
    }

    shuffledQuestions[currentQuestionIndex].wasAnswered = true; // ✅ Mark as answered

    let wasCorrect = false;

    if (selectedOption === decodedCorrectAnswer) {
        console.log("🎉 CORRECT ANSWER!");
        button.style.backgroundColor = "lightgreen";
        wasCorrect = true;
        correctAnswers++; // ✅ This was missing! Fixes progress bar issue
    } else {
        console.log("❌ WRONG ANSWER!");
        button.style.backgroundColor = "lightcoral";

        if (!previouslyIncorrect.has(shuffledQuestions[currentQuestionIndex].question)) {
            previouslyIncorrect.add(shuffledQuestions[currentQuestionIndex].question);
            totalQuestions++; // ✅ Increase total questions for repeats
        }
    }

    // ✅ Highlight Correct Answer
    Array.from(answerOptions.children).forEach(btn => {
        if (decodeHtmlEntities(btn.innerText.trim()) === decodedCorrectAnswer) {
            btn.style.backgroundColor = "lightgreen";
        }
    });

    totalAnsweredQuestions++; // ✅ Increment answered question count

    updateProgress(); // ✅ Progress bar now updates properly

    console.log("➡ Showing Next Button...");
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    console.log("➡ NEXT QUESTION CLICKED! Current index:", currentQuestionIndex);

    if (!shuffledQuestions[currentQuestionIndex].wasAnswered) {
        console.log("❌ ERROR: User didn't answer yet.");
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
        console.log("🔄 Displaying next question:", currentQuestionIndex + 1);
        displayQuestion();
    } else {
        console.log("🏁 All questions answered, calling endQuiz()");
        endQuiz();
    }
});

// Motivational Messages Array
const reviewMessages = [
    "Time to refine your skills! Let’s tackle those tricky questions again.",
    "You’re almost there! A few more correct answers and you’ll hit 100%.",
    "One last push! Let’s clear up any mistakes and finish strong.",
    "Review round! Answer these correctly to complete your progress.",
    "Almost perfect! Let’s master these last few questions."
];

function startReviewRound() {
    if (previouslyIncorrect.size > 0) {
        shuffledQuestions = cssBasicsQuestions.filter(q => previouslyIncorrect.has(q.question));
        previouslyIncorrect.clear();
        currentQuestionIndex = 0;

        shuffledQuestions.forEach(q => q.wasAnswered = false); // ✅ Allow answering again
        
        nextButton.style.display = "block"; // ✅ Ensure Next button is visible
        displayQuestion(); // ✅ Start the review round
    }
}

// Elements
const popup = document.getElementById("review-popup");
const popupMessage = document.getElementById("popup-message");
const closePopupButton = document.getElementById("close-popup");

// Show Review Popup
function showReviewPopup() {
    // Select a Random Message
    popupMessage.textContent = reviewMessages[Math.floor(Math.random() * reviewMessages.length)];

    // Blur Background and Show Popup
    quizContainer.classList.add("blurred-background");
    popup.classList.add("active");
}

// Close Popup and Remove Blur
closePopupButton.addEventListener("click", () => {
    quizContainer.classList.remove("blurred-background");
    popup.classList.remove("active");

    // Move to Review Questions
    startReviewRound();
});


function resetQuizState() {
    console.log("🔄 Resetting quiz state...");
    shuffledQuestions = [];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    previouslyIncorrect.clear();
}

// Get Completion Popup Elements
const completionPopup = document.getElementById("completion-popup");
const returnToMenuPopupButton = document.getElementById("return-to-menu-popup");

// Show Completion Popup
function showCompletionPopup() {
    quizContainer.classList.add("blurred-background");
    completionPopup.classList.add("active");
}

// Handle Return to Menu Button Click (Inside Popup)
returnToMenuPopupButton.addEventListener("click", () => {
    
    quizContainer.classList.remove("blurred-background");
    completionPopup.classList.remove("active");

    // ✅ Ensure the whole grid layout is visible again
    document.querySelector(".mastery-main-page-grid-container").style.display = "grid";
    
    returnToMenuButton.style.display = "none";
    gridContainer.style.display = "grid";
    quizContainer.style.display = "none";
});

// Modify End Quiz Function
function endQuiz() {
    console.log("🚨🚨🚨 DEBUG: END QUIZ FUNCTION IS RUNNING 🚨🚨🚨");

    if (previouslyIncorrect.size > 0) {
        showReviewPopup(); // Show review popup for incorrect questions
        console.log("🔁 REVIEW ROUND STARTED: Incorrect answers exist.");
        shuffledQuestions = cssBasicsQuestions.filter(q => previouslyIncorrect.has(q.question));
        previouslyIncorrect.clear();
        currentQuestionIndex = 0;
        shuffledQuestions.forEach(q => q.wasAnswered = false);
        displayQuestion();
    } else {
        showCompletionPopup();
        console.log("✅ QUIZ COMPLETED! Checking topic completion...");
        console.log("🎯 Current Topic ID at end:", currentTopicId);

        if (currentTopicId) {
            console.log("🏁 Saving topic completion for:", currentTopicId);
            saveCompletedTopic(currentTopicId);
        } else if (shuffledQuestions.length > 0) {
            console.log("🛠 Trying to determine last completed topic...");
            let lastQuestionTopic = shuffledQuestions[0].topic;
            saveCompletedTopic(lastQuestionTopic);
        } else {
            console.log("❌ ERROR: No topic ID found!");
        }

        returnToMenuButton.style.display = "block";
        backToMenuButton.style.display = "none";
        nextButton.style.display = "none";

        markCompletedTopics();
        updateNextSectionLink();
    }
}

// ✅ Load Completed Topics from Local Storage
function getCompletedTopics() {
    return JSON.parse(localStorage.getItem("completedTopics")) || [];
}

// ✅ Save Completed Topics to Local Storage (Only when exercise is completed)
function saveCompletedTopic(topicId) {
    if (!topicId) {
        console.log("❌ ERROR: No topic ID provided to saveCompletedTopic!");
        return;
    }

    let completedTopics = getCompletedTopics();
    console.log("📂 LOCAL STORAGE BEFORE SAVE:", completedTopics);

    if (!completedTopics.includes(topicId)) {
        completedTopics.push(topicId);
        localStorage.setItem("completedTopics", JSON.stringify(completedTopics));
markCompletedTopics(); // ✅ Update the UI after saving
updateNextSectionLink();

        console.log(`✅ Topic '${topicId}' marked as complete!`);
    } else {
        console.log(`⚠️ Topic '${topicId}' was already marked complete.`);
    }

    console.log("📂 LOCAL STORAGE AFTER SAVE:", getCompletedTopics());

    markCompletedTopics();
    updateNextSectionLink();
}

// ✅ Mark Completed Topics on Page Load
function markCompletedTopics() {
    let completedTopics = getCompletedTopics();
    let topicButtons = document.querySelectorAll(".topic-button");

    if (topicButtons.length === 0) {
        console.log("⚠️ No topic buttons found. Skipping marking.");
        return;
    }

    topicButtons.forEach(button => {
        if (completedTopics.includes(button.dataset.topic)) {
            button.style.backgroundColor = "green"; // Mark completed topics
            console.log(`✅ Marked '${button.dataset.topic}' as completed.`);
        }
    });
}

// ✅ Find the First Incomplete Topic
function getNextTopic() {
    let completedTopics = getCompletedTopics();

    console.log("🔎 Checking for next topic...");
    console.log("✅ Completed topics:", completedTopics);

    for (let chapter of cssChapters) {
        for (let topic of chapter.topics) {
            if (!completedTopics.includes(topic.id)) {
                console.log(`🚀 Next topic to complete: ${topic.topic}`);
                return topic; // ✅ First incomplete topic
            }
        }
    }

    console.log("🎉 All topics completed!");
    return null; // ✅ No incomplete topics left
}

// ✅ Update Next Section Link
function updateNextSectionLink() {
    let nextTopic = getNextTopic();
    let nextSectionDiv = document.querySelector(".grid-right-section");

    if (!nextSectionDiv) {
        console.log("⚠️ No '.grid-right-section' found. Skipping update.");
        return;
    }

    if (!nextTopic) {
        console.log("✅ No more topics left to complete.");
        nextSectionDiv.innerHTML = "<p>All topics completed!</p>";
        return;
    }

    console.log(`🟢 Next section set to: ${nextTopic.topic}`);
    nextSectionDiv.innerHTML = `
        <p>Next Section:</p>
        <a href="#" class="next-topic-link" data-topic-id="${nextTopic.id}">${nextTopic.topic}</a>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        markCompletedTopics();
        updateNextSectionLink();
    }, 100); // Wait briefly to ensure elements are loaded
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("next-topic-link")) {
        event.preventDefault();

        let topicId = event.target.getAttribute("data-topic-id");

        if (!topicId) {
            console.error("❌ ERROR: No topic ID found! Fixing...");
            return;
        }

        console.log(`🔥 Starting quiz for next section: ${topicId}`);

        // ✅ Call startQuiz with correct topic ID
        startQuiz(topicId);
    }
});

let currentTopicId = null;

function startQuiz(topicId) {
    console.log(`🚀 startQuiz() CALLED with topicId = '${topicId}'`);

    if (!topicId) {
        console.error("❌ ERROR: startQuiz() was called WITHOUT a valid topicId!");
        return;
    }

    console.log(`🎯 STARTING quiz for topic: '${topicId}'`);

    // ✅ Ensure we correctly set `currentTopicId`
    currentTopicId = topicId;

    // ✅ Reset the entire quiz state
    shuffledQuestions = [];  // Clear old questions
    currentQuestionIndex = 0;
    correctAnswers = 0;
    previouslyIncorrect.clear();
    
    // ✅ Filter questions properly
    shuffledQuestions = cssBasicsQuestions.filter(q => q.topic === topicId);

    if (shuffledQuestions.length === 0) {
        console.error(`❌ ERROR: No questions found for topic '${topicId}'!`);
        return;
    }

    console.log("📌 Filtered Questions:", shuffledQuestions);

    // ✅ Shuffle the questions
    shuffleArray(shuffledQuestions);
    
    // ✅ Reset tracking variables
    totalQuestions = shuffledQuestions.length; 
    totalAnsweredQuestions = 0;  // Ensure answered count resets
    progressBar.value = 0;  // Reset progress bar immediately
    updateProgress();  // Ensure progress updates instantly

    console.log(`📌 totalQuestions set to: ${totalQuestions}`);

    // ✅ Reset UI Elements
    answerOptions.innerHTML = ""; // Remove old answer buttons
    nextButton.style.display = "none"; 
    returnToMenuButton.style.display = "none"; 

    // ✅ Ensure quiz is displayed properly
    document.getElementById("gridContainer").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    console.log("✅ UI Updated: Grid Hidden, Quiz Shown");

    backToMenuButton.style.display = "block";

    console.log("📌 Resetting progress before starting new topic...");
    progressBar.value = 0; 
    totalAnsweredQuestions = 0;
    correctAnswers = 0; 
    updateProgress(); 

    console.log("📌 Displaying First Question...");
    displayQuestion();
}










// shuffle stuff code stuff 


let shuffleQuestions = [];

document.addEventListener("DOMContentLoaded", () => {
    let shuffleButton = document.getElementById("shuffle-quiz-button");
    let shuffleCurrentIndex = 0;

    const shuffleContainer = document.getElementById("shuffle-container");
    const shuffleQuestionText = document.getElementById("shuffle-question-text");
    const shuffleAnswerOptions = document.getElementById("shuffle-answer-options");
    const shuffleBackToMenuButton = document.getElementById("shuffle-back-to-menu");
    const shuffleNextButton = document.getElementById("shuffle-next-button");

    shuffleButton.addEventListener("click", () => {
        console.log("🎲 Shuffle button clicked! Switching to shuffle mode...");

        if (!shuffleQuestions || shuffleQuestions.length === 0) {
            console.error("❌ ERROR: No questions available for shuffle!");
            shuffleContainer.innerHTML = "<h2>Error: No questions found!</h2>";
            return;
        }

        document.getElementById("gridContainer").style.display = "none";
        document.getElementById("quiz-container").style.display = "none";
        shuffleContainer.style.display = "block";
        shuffleCurrentIndex = 0; // Reset index

        shuffleBackToMenuButton.style.display = "block"; // Show Back to Menu button

        displayShuffleQuestion();
    });

    function displayShuffleQuestion() {
        if (shuffleCurrentIndex >= shuffleQuestions.length) {
            document.getElementById("shuffle-question-text").innerText = `Shuffled Question ${shuffleCurrentIndex + 1} / ${shuffleQuestions.length}`;
            document.getElementById("shuffle-answer-options").innerHTML = ""; // Clear previous answers
            
        
            question.options.forEach(option => {
                let button = document.createElement("button");
                button.innerText = option;
                button.classList.add("shuffle-answer-button");
                button.addEventListener("click", () => handleShuffleAnswer(button, question.answer));
                document.getElementById("shuffle-answer-options").appendChild(button);
            });
            
            // Show the next button after an answer is selected
            document.getElementById("shuffle-next-button").style.display = "none";
            console.log("✅ End of shuffle questions.");
            document.getElementById("back-to-menu").addEventListener("click", () => {
                shuffleContainer.style.display = "none";
                document.getElementById("gridContainer").style.display = "grid";
                console.log("🔄 Back to Menu button clicked - Returning to main menu.");
            });
            return;
        }
        let question = shuffleQuestions[shuffleCurrentIndex];
    
        console.log(`🔍 DEBUG: Displaying Question ${shuffleCurrentIndex + 1}/${shuffleQuestions.length}`);
        console.log(`❓ Question: ${question.question}`);
        console.log(`✅ Correct Answer: ${question.answer}`);
    
        shuffleContainer.innerHTML = `
        <h2>Shuffled Question ${shuffleCurrentIndex + 1} / ${shuffleQuestions.length}</h2>
        <p>${question.question}</p>
        <div id="shuffle-answer-options"></div>
        <button id="shuffle-next-button" style="display: none;">Next</button>
        <button id="shuffle-back-to-menu">Back to Menu</button>
    `;
    
    
    document.getElementById("shuffle-back-to-menu").addEventListener("click", () => {
        console.log("🔄 Returning to Main Menu from Shuffle Quiz...");
        shuffleContainer.style.display = "none"; // Hide shuffle quiz
        document.getElementById("gridContainer").style.display = "grid"; // Show main menu
        console.log("✅ Shuffle Quiz Reset & Menu Restored.");
    });
    
        let answerOptionsDiv = document.getElementById("shuffle-answer-options");

        question.options.forEach(option => {
            let button = document.createElement("button");
            button.innerHTML = option;
            button.classList.add("shuffle-answer-button");

            button.addEventListener("click", () => handleShuffleAnswer(button, question.answer));
            answerOptionsDiv.appendChild(button);
        });

        document.getElementById("shuffle-next-button").addEventListener("click", () => {
            shuffleCurrentIndex++;
            displayShuffleQuestion();
        });
    }

    shuffleBackToMenuButton.addEventListener("click", () => {

        shuffleContainer.style.display = "none"; // Hide shuffle quiz
        document.getElementById("gridContainer").style.display = "grid"; // Show main menu

    });
    
    function handleShuffleAnswer(button, correctAnswer) {
        const selectedOption = decodeHtmlEntities(button.innerText.trim());
        const decodedCorrectAnswer = decodeHtmlEntities(correctAnswer.trim());
    
        console.log(`Selected Answer: ${selectedOption}`);
        console.log(`Expected Correct Answer: ${decodedCorrectAnswer}`);
    
        if (selectedOption === decodedCorrectAnswer) {
            console.log("🎉 CORRECT ANSWER!");
            button.style.backgroundColor = "lightgreen";
        } else {
            console.log("❌ WRONG ANSWER!");
            button.style.backgroundColor = "lightcoral";
        }
    
        // Highlight the correct answer
        let foundCorrect = false;
        Array.from(document.getElementById("shuffle-answer-options").children).forEach(btn => {
            if (decodeHtmlEntities(btn.innerText.trim()) === decodedCorrectAnswer) {
                btn.style.backgroundColor = "lightgreen";
                foundCorrect = true;
            }
        });
    
        document.getElementById("shuffle-next-button").style.display = "block"; // Show next button
    }
    
    // Helper Function: Decode HTML Entities
    function decodeHtmlEntities(str) {
        let txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
    }

const gridContainer = document.getElementById("gridContainer");

shuffleBackToMenuButton.innerText = "Back to Menu";
shuffleBackToMenuButton.id = "shuffle-back-to-menu";

shuffleContainer.appendChild(shuffleBackToMenuButton);

shuffleButton.addEventListener("click", () => {

    if (!shuffleQuestions || shuffleQuestions.length === 0) {
        shuffleContainer.innerHTML = "<h2>Error: No questions found!</h2>";
        return;
    }

    // Hide other elements
    gridContainer.style.display = "none";
    shuffleContainer.style.display = "block";

    shuffleBackToMenuButton.style.display = "block"; // Show Back to Menu button

    // Reset shuffle index & display first question
    shuffleCurrentIndex = 0;
    displayShuffleQuestion();
});

// ✅ Back to Menu Button Functionality
shuffleBackToMenuButton.addEventListener("click", () => {
    shuffleContainer.style.display = "none"; // Hide shuffle quiz
    document.getElementById("gridContainer").style.display = "grid"; // Show main menu
});
});