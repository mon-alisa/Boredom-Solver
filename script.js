console.log("Boredom Solver loaded");
const questions = [

    {
        question: "What kind of mood are you in?",
        type: "single",
        options: [
            { text: "🧠 I want to be productive", value: "productive" },
            { text: "🎨 I want to be creative", value: "creative" },
            { text: "🎮 I just want something fun", value: "fun" },
            { text: "👯 I want something social", value: "social" },
            { text: "😴 I want to relax", value: "relax" }
        ]
    },

    {
        question: "How much energy do you have?",
        type: "single",
        options: [
            { text: "⚡ A lot", value: "high" },
            { text: "🙂 Some", value: "medium" },
            { text: "🛋️ Very little", value: "low" }
        ]
    },

    {
        question: "How much time do you have?",
        type: "single",
        options: [
            { text: "⏱️ 5–15 minutes", value: "15min" },
            { text: "🕐 Around 30 minutes", value: "30min" },
            { text: "⏰ 1–2 hours", value: "1hour" },
            { text: "☀️ Most of the afternoon", value: "afternoon" },
            { text: "📅 Several days", value: "days" }
        ]
    },

    {
        question: "What sounds best?",
        type: "single",
        options: [
            { text: "🏠 Something I can do at home", value: "home" },
            { text: "🌎 I want to get out", value: "outside" },
            { text: "🤷 I don't care", value: "anywhere" }
        ]
    },

    {
        question: "Who do you want to do it with?",
        type: "single",
        options: [
            { text: "🧍 Just me", value: "alone" },
            { text: "👯 Friends", value: "friends" },
            { text: "👨‍👩‍👧 Family", value: "family" },
            { text: "🗣️ I want to meet people", value: "people" }
        ]
    },

    {
        question: "Do you want to spend money?",
        type: "single",
        options: [
            { text: "🆓 No — keep it free", value: "free" },
            { text: "🪙 A little is okay", value: "cheap" },
            { text: "💸 I don't mind spending", value: "money" }
        ]
    },

    {
        question: "What are you interested in?",
        type: "multiple",
        options: [
            { text: "💰 Money & business", value: "business" },
            { text: "💻 Technology", value: "technology" },
            { text: "🎨 Art & design", value: "art" },
            { text: "📸 Photography", value: "photography" },
            { text: "📚 Reading & writing", value: "writing" },
            { text: "🧪 Science", value: "science" },
            { text: "🎵 Music", value: "music" },
            { text: "👗 Fashion", value: "fashion" },
            { text: "🌎 Community", value: "community" },
            { text: "🍳 Food", value: "food" },
            { text: "🌱 Nature", value: "nature" },
            { text: "🎮 Gaming", value: "gaming" },
            { text: "🤷 I'm not sure", value: "anything" }
        ]
    },

    {
        question: "What do you want to get out of this?",
        type: "multiple",
        options: [
            { text: "😂 Have fun", value: "fun_goal" },
            { text: "🧠 Learn something", value: "learning" },
            { text: "🚀 Be productive", value: "productive_goal" },
            { text: "🎓 Help my future", value: "future" },
            { text: "🏆 Build an extracurricular", value: "extracurricular" },
            { text: "💰 Make money", value: "money_goal" },
            { text: "🌸 Relax", value: "relax_goal" }
        ]
    },

    {
        question: "How adventurous are you feeling?",
        type: "single",
        options: [
            { text: "😌 Keep it familiar", value: "familiar" },
            { text: "🙂 I'll try something new", value: "new" },
            { text: "🚀 Give me something unexpected", value: "adventurous" }
        ]
    },

    {
        question: "How much effort do you want to put in?",
        type: "single",
        options: [
            { text: "🛋️ Almost none", value: "low" },
            { text: "🙂 A little", value: "medium" },
            { text: "🔥 I'm willing to work", value: "high" }
        ]
    }

];


let currentQuestion = 0;

let answers = {};


function startQuiz() {

    document.getElementById("home").classList.add("hidden");

    document.getElementById("quizSection").classList.remove("hidden");

    currentQuestion = 0;

    answers = {};

    showQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `QUESTION ${currentQuestion + 1} OF ${questions.length}`;

    document.getElementById("questionText").textContent =
        question.question;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";


    question.options.forEach(option => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = option.text;

        button.onclick = () => selectAnswer(option.value, button);

        answersContainer.appendChild(button);

    });

}


function selectAnswer(value, button) {

    const question = questions[currentQuestion];


    if (question.type === "multiple") {

        if (!answers[currentQuestion]) {

            answers[currentQuestion] = [];

        }


        if (answers[currentQuestion].includes(value)) {

            answers[currentQuestion] =
                answers[currentQuestion].filter(
                    item => item !== value
                );

            button.classList.remove("selected");

        } else {

            answers[currentQuestion].push(value);

            button.classList.add("selected");

        }


        showContinueButton();

    } else {

        answers[currentQuestion] = value;

        nextQuestion();

    }

}


function showContinueButton() {

    let existingButton =
        document.getElementById("continueButton");


    if (existingButton) return;


    const button = document.createElement("button");

    button.id = "continueButton";

    button.className = "continue-button";

    button.textContent = "Continue →";

    button.onclick = nextQuestion;


    document.getElementById("answers")
        .appendChild(button);

}


function nextQuestion() {

    currentQuestion++;


    if (currentQuestion >= questions.length) {

        showResults();

        return;

    }


    showQuestion();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function calculateScore(activity) {

    let score = 0;

    let totalPossible = 0;


    function check(answer, activityValues, points) {

        totalPossible += points;


        if (!answer) return;


        if (Array.isArray(answer)) {

            if (
                answer.some(item =>
                    activityValues.includes(item)
                )
            ) {
                score += points;
            }

        } else {

            if (activityValues.includes(answer)) {
                score += points;
            }

        }

    }


    check(answers[0], activity.moods, 4);

    check(answers[1], activity.energy, 3);

    check(answers[2], activity.time, 3);

    check(answers[3], activity.location, 2);

    check(answers[4], activity.social, 2);

    check(answers[5], activity.cost, 2);

    check(answers[6], activity.interests, 5);

    check(answers[7], activity.goals, 4);

    check(answers[9], activity.effort, 2);


    if (
        activity.future &&
        answers[7]?.includes("future")
    ) {
        score += 3;
    }


    const percentage =
        Math.round((score / totalPossible) * 100);


    return Math.min(percentage, 99);

}


function showResults() {

    document.getElementById("questionCard")
        .classList.add("hidden");

    document.getElementById("results")
        .classList.remove("hidden");

    const resultContent =
        document.getElementById("resultContent");

    resultContent.innerHTML = "";


    // Make sure our activity database exists
    if (typeof activities === "undefined" || activities.length === 0) {

        resultContent.innerHTML = `
            <div class="result-card">
                <h3>⚠️ Something went wrong</h3>
                <p>
                    Boredom Solver couldn't load the activity database.
                    Please refresh the page and try again.
                </p>
            </div>
        `;

        return;
    }


    // Calculate a score for every activity
    const rankedActivities = activities
        .map(activity => {

            return {
                ...activity,
                score: calculateScore(activity)
            };

        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);


    // Create the result cards
    rankedActivities.forEach((activity, index) => {

        const card =
            document.createElement("div");

        card.className = "result-card";


        const tags =
            activity.interests
                .slice(0, 4)
                .map(tag => {

                    return `
                        <span class="tag">
                            ${tag}
                        </span>
                    `;

                })
                .join("");


        card.innerHTML = `

            <div class="match">
                ${activity.score}% MATCH
            </div>

            <h3>
                ${index + 1}. ${activity.title}
            </h3>

            <p>
                ${activity.description}
            </p>

            <div class="tags">
                ${tags}
            </div>

        `;


        resultContent.appendChild(card);

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function restart() {

    currentQuestion = 0;

    answers = {};


    document.getElementById("results")
        .classList.add("hidden");

    document.getElementById("questionCard")
        .classList.remove("hidden");


    showQuestion();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
