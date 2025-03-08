import cssBasicsQuestionsShuffled from './questions.js';

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

const cssBasicsQuestions = [
    // ✅ CSS Introduction
    {
        topic: "css-introduction",
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Syntax", "Coded Style System"],
        answer: "Cascading Style Sheets"
    },
    {
        topic: "css-introduction",
        question: "Which HTML tag is used to link an external CSS file?",
        options: ["&lt;css&gt;", "&lt;style&gt;", "&lt;link&gt;", "&lt;stylesheet&gt;"],
        answer: "&lt;link&gt;"
    },
    {
        topic: "css-introduction",
        question: "Which attribute is used in an HTML element to apply inline CSS styles?",
        options: ["style", "css", "inline", "format"],
        answer: "style"
    },
    {
        topic: "css-introduction",
        question: "Where is the best place to include an external CSS file?",
        options: ["Inside the &lt;head&gt;", "Inside the &lt;body&gt;", "At the bottom of the document", "Inside a &lt;div&gt;"],
        answer: "Inside the &lt;head&gt;"
    },
    {
        topic: "css-introduction",
        question: "Which of the following is NOT a way to apply CSS to an HTML document?",
        options: ["External stylesheet", "Inline styles", "JavaScript styling", "Internal stylesheet"],
        answer: "JavaScript styling"
    },

    // ✅ CSS Selectors
    {
        topic: "css-selectors",
        question: "What is the correct syntax for selecting all &lt;p&gt; elements in CSS?",
        options: ["p {}", "#p {}", ".p {}", "&lt;p&gt; {}"],
        answer: "p {}"
    },
    {
        topic: "css-selectors",
        question: "Which CSS selector targets an element with a specific `id`?",
        options: ["#id", ".id", "id {}", "&lt;id&gt;"],
        answer: "#id"
    },
    {
        topic: "css-selectors",
        question: "What does the `*` selector do in CSS?",
        options: ["Targets all elements", "Targets all &lt;p&gt; elements", "Targets only body elements", "Targets inline elements only"],
        answer: "Targets all elements"
    },
    {
        topic: "css-selectors",
        question: "What is the correct way to select all &lt;p&gt; elements inside a &lt;div&gt;?",
        options: ["div p", "div > p", "div, p", "#div p"],
        answer: "div p"
    },
    {
        topic: "css-selectors",
        question: "Which selector targets **only direct children** of a &lt;div&gt;?",
        options: ["div > p", "div p", "div + p", "div ~ p"],
        answer: "div > p"
    },

    // ✅ CSS Colors & Backgrounds
    {
        topic: "css-colors-backgrounds",
        question: "Which CSS property is used to change text color?",
        options: ["font-color", "text-color", "color", "foreground"],
        answer: "color"
    },
    {
        topic: "css-colors-backgrounds",
        question: "Which CSS property is used to set a background color?",
        options: ["background", "bg-color", "background-color", "color"],
        answer: "background-color"
    },
    {
        topic: "css-colors-backgrounds",
        question: "What is the hexadecimal code for black?",
        options: ["#000", ".black", "black", ".000"],
        answer: "#000"
    },
    {
        topic: "css-colors-backgrounds",
        question: "What does `rgba(255, 0, 0, 0.5)` represent?",
        options: ["Solid red", "Transparent red", "Half-opacity blue", "Transparent black"],
        answer: "Transparent red"
    },
    {
        topic: "css-colors-backgrounds",
        question: "Which CSS property is used to apply a background image?",
        options: ["background", "background-image", "image-src", "bg-img"],
        answer: "background-image"
    },

    // ✅ CSS Text Styling
    {
        topic: "css-text-styling",
        question: "Which CSS property is used to change the font size?",
        options: ["font-size", "text-size", "size", "font"],
        answer: "font-size"
    },
    {
        topic: "css-text-styling",
        question: "Which CSS property is used to make text bold?",
        options: ["font-weight", "text-bold", "bold", "font-style"],
        answer: "font-weight"
    },
    {
        topic: "css-text-styling",
        question: "Which CSS property is used to change the font family?",
        options: ["font-family", "text-font", "font", "family"],
        answer: "font-family"
    },
    {
        topic: "css-text-styling",
        question: "Which unit is relative to the font size of the element?",
        options: ["px", "em", "vh", "rem"],
        answer: "em"
    },
    {
        topic: "css-text-styling",
        question: "Which CSS property is used to control letter spacing?",
        options: ["letter-spacing", "word-spacing", "line-height", "spacing"],
        answer: "letter-spacing"
    },

    // ✅ CSS Box Model
    {
        topic: "css-box-model",
        question: "Which CSS property controls the space inside an element’s border?",
        options: ["margin", "padding", "spacing", "border-spacing"],
        answer: "padding"
    },
    {
        topic: "css-box-model",
        question: "Which CSS property controls the space **outside** an element’s border?",
        options: ["margin", "padding", "spacing", "border"],
        answer: "margin"
    },
    {
        topic: "css-box-model",
        question: "Which CSS property sets the width of an element’s border?",
        options: ["border-width", "border-size", "border", "border-thickness"],
        answer: "border-width"
    },
    {
        topic: "css-box-model",
        question: "What does `box-sizing: border-box;` do?",
        options: ["Excludes padding from width calculations", "Includes padding & border in width", "Hides the border", "Increases element size"],
        answer: "Includes padding & border in width"
    },
    {
        topic: "css-box-model",
        question: "Which CSS property controls the **visibility** of an element?",
        options: ["display", "opacity", "visibility", "z-index"],
        answer: "visibility"
    },

    // Margins, padding and borders 
    {
        topic: "css-spacing",
        question: "Which property controls the space between an element’s content and its border?",
        options: ["padding", "margin", "border", "spacing"],
        answer: "padding"
    },
    {
        topic: "css-spacing",
        question: "What happens if you set 'margin: auto;' on a block element?",
        options: [
            "It sets the margin to zero",
            "It horizontally centers the element within its container",
            "It removes all margins",
            "It has no effect"
        ],
        answer: "It horizontally centers the element within its container"
    },
    {
        topic: "css-spacing",
        question: "Which of the following is the correct order for the shorthand 'margin: 10px 20px 30px 40px;'?",
        options: [
            "Top, Right, Bottom, Left",
            "Right, Top, Bottom, Left",
            "Top, Bottom, Left, Right",
            "Left, Top, Right, Bottom"
        ],
        answer: "Top, Right, Bottom, Left"
    },
    {
        topic: "css-spacing",
        question: "Which border style creates a dashed border?",
        options: ["border-style: solid;", "border-style: dotted;", "border-style: dashed;", "border-style: double;"],
        answer: "border-style: dashed;"
    },
    {
        topic: "css-spacing",
        question: "How can you apply different padding values for top, right, bottom, and left?",
        options: [
            "Using padding-top, padding-right, padding-bottom, padding-left separately",
            "Using padding: 10px;",
            "Using padding-all: 10px;",
            "Padding must always be equal on all sides"
        ],
        answer: "Using padding-top, padding-right, padding-bottom, padding-left separately"
    },

    // Width, height and overlfow
    {
        topic: "css-sizing-overflow",
        question: "Which CSS property controls the width of an element?",
        options: ["height", "width", "max-width", "content-width"],
        answer: "width"
    },
    {
        topic: "css-sizing-overflow",
        question: "What is the difference between 'max-width' and 'min-width'?",
        options: [
            "max-width sets the maximum width, min-width sets the minimum width",
            "They both do the same thing",
            "min-width takes priority over max-width",
            "max-width is only used for images"
        ],
        answer: "max-width sets the maximum width, min-width sets the minimum width"
    },
    {
        topic: "css-sizing-overflow",
        question: "What happens if an element’s content is larger than its defined width and height?",
        options: [
            "The content will be cut off",
            "It will always expand to fit the content",
            "It depends on the 'overflow' property",
            "It will automatically scroll"
        ],
        answer: "It depends on the 'overflow' property"
    },
    {
        topic: "css-sizing-overflow",
        question: "Which 'overflow' value allows content to scroll when it exceeds its container?",
        options: ["hidden", "auto", "scroll", "visible"],
        answer: "scroll"
    },
    {
        topic: "css-sizing-overflow",
        question: "What does 'height: 100vh;' do?",
        options: [
            "Sets the height to 100 pixels",
            "Sets the height to 100% of the viewport height",
            "Makes the element fullscreen",
            "Has no effect on block elements"
        ],
        answer: "Sets the height to 100% of the viewport height"
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
        correctAnswers = 0;
        totalAnsweredQuestions = 0;
        previouslyIncorrect.clear();

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

// ✅ Function to Update Progress
// ✅ Function to Update Progress Bar
function updateProgress() {
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

    if (nextTopic) {
        nextSectionDiv.innerHTML = `<p>Next Section:</p>
            <a href="#" class="next-topic-link" data-topic-id="${nextTopic.id}">${nextTopic.topic}</a>`;
        
        console.log(`🟢 Next section set to: ${nextTopic.topic}`);
    } else {
        nextSectionDiv.innerHTML = "<p>All topics completed!</p>";
        console.log("✅ No more topics left to complete.");
    }
}

// ✅ Run these functions on page load (Ensuring they wait for the DOM)
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        markCompletedTopics();
        updateNextSectionLink();
    }, 100); // Wait briefly to ensure elements are loaded
});

// ✅ Attach Completion to Return Button or Completion Popup (Using Event Delegation)
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("next-topic-link")) {
        event.preventDefault();

        let topicId = event.target.getAttribute("data-topic-id");

        if (!topicId) {
            console.error("❌ ERROR: No topic ID found! Fixing...");
            return;
        }

        console.log(`🔥 Starting quiz for next section: ${topicId}`);
        startQuiz(topicId);
    }
});

// ✅ Track Current Topic (Set When Quiz Starts)
let currentTopicId = null;

function startQuiz(topicId) {
    console.log(`🚀 startQuiz() CALLED with topicId = '${topicId}'`);

    if (!topicId) {
        console.error("❌ ERROR: startQuiz() was called WITHOUT a valid topicId!");
        return;
    }

    console.log(`🎯 STARTING quiz for topic: '${topicId}'`);

    // ✅ **Ensure we correctly set `currentTopicId`**
    currentTopicId = topicId;

    // ✅ **Reset the entire quiz state**
    shuffledQuestions = [];  // CLEAR OLD QUESTIONS
    currentQuestionIndex = 0;
    correctAnswers = 0;
    previouslyIncorrect.clear();
    
    // ✅ **Filter questions properly**
    shuffledQuestions = cssBasicsQuestions.filter(q => q.topic === topicId);

    if (shuffledQuestions.length === 0) {
        console.error(`❌ ERROR: No questions found for topic '${topicId}'!`);
        return;
    }

    console.log("📌 Filtered Questions:", shuffledQuestions);

    // ✅ **Shuffle the questions**
    shuffleArray(shuffledQuestions);
    
    // ✅ **Ensure indexes and tracking variables are reset**
    totalQuestions = shuffledQuestions.length;
    console.log(`📌 totalQuestions set to: ${totalQuestions}`);

    // ✅ **Reset UI Elements**
    answerOptions.innerHTML = ""; // ✅ Remove old answer buttons
    nextButton.style.display = "none"; 
    returnToMenuButton.style.display = "none"; 

    // ✅ **Ensure quiz is displayed properly**
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