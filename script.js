const questions = [

    {
        id: "mood",
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
        id: "energy",
        question: "How much energy do you have?",
        type: "single",
        options: [
            { text: "⚡ A lot", value: "high" },
            { text: "🙂 Some", value: "medium" },
            { text: "🛋️ Very little", value: "low" }
        ]
    },

    {
        id: "time",
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
        id: "location",
        question: "Where do you want to do something?",
        type: "single",
        options: [
            { text: "🏠 At home", value: "home" },
            { text: "🌎 I want to get out", value: "outside" },
            { text: "🤷 I don't care", value: "anywhere" }
        ]
    },

    {
        id: "social",
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
        id: "cost",
        question: "Do you want to spend money?",
        type: "single",
        options: [
            { text: "🆓 No — keep it free", value: "free" },
            { text: "🪙 A little is okay", value: "cheap" },
            { text: "💸 I don't mind spending", value: "money" }
        ]
    },

    {
        id: "interests",
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
            { text: "🏃 Fitness", value: "fitness" },
            { text: "🎮 Gaming", value: "gaming" },
            { text: "🤷 I'm not sure", value: "anything" }
        ]
    },

    {
        id: "goals",
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
        id: "adventure",
        question: "How adventurous are you feeling?",
        type: "single",
        options: [
            { text: "😌 Keep it familiar", value: "familiar" },
            { text: "🙂 I'll try something new", value: "new" },
            { text: "🚀 Give me something unexpected", value: "adventurous" }
        ]
    },

    {
        id: "effort",
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

let shownResults = [];


/* -------------------------
   START QUIZ
------------------------- */

function startQuiz() {

    document.getElementById("home").classList.add("hidden");

    document.getElementById("quizSection").classList.remove("hidden");

    document.getElementById("results").classList.add("hidden");

    document.getElementById("questionCard").classList.remove("hidden");

    currentQuestion = 0;

    answers = {};

    shownResults = [];

    showQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* -------------------------
   SHOW QUESTION
------------------------- */

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

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent = option.text;

        button.onclick =
            () => selectAnswer(option.value, button);

        answersContainer.appendChild(button);

    });

}


/* -------------------------
   ANSWER SELECTION
------------------------- */

function selectAnswer(value, button) {

    const question = questions[currentQuestion];


    if (question.type === "multiple") {

        if (!answers[question.id]) {
            answers[question.id] = [];
        }


        if (answers[question.id].includes(value)) {

            answers[question.id] =
                answers[question.id].filter(
                    item => item !== value
                );

            button.classList.remove("selected");

        } else {

            answers[question.id].push(value);

            button.classList.add("selected");

        }


        showContinueButton();

    } else {

        answers[question.id] = value;

        nextQuestion();

    }

}


/* -------------------------
   CONTINUE BUTTON
------------------------- */

function showContinueButton() {

    let existing =
        document.getElementById("continueButton");

    if (existing) return;


    const button =
        document.createElement("button");

    button.id = "continueButton";

    button.className = "continue-button";

    button.textContent = "Continue →";

    button.onclick = nextQuestion;


    document.getElementById("answers")
        .appendChild(button);

}


/* -------------------------
   NEXT QUESTION
------------------------- */

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


/* -------------------------
   MATCHING ENGINE
------------------------- */

function calculateScore(activity) {

    let score = 0;

    let possible = 0;


    function match(answer, values, weight) {

        possible += weight;


        if (!answer || !values) return;


        if (Array.isArray(answer)) {

            const matches =
                answer.filter(item =>
                    values.includes(item)
                ).length;


            if (matches > 0) {

                score += weight *
                    Math.min(matches / 2, 1);

            }

        } else {

            if (values.includes(answer)) {

                score += weight;

            }

        }

    }


    /*
        Interests are the strongest factor.
    */

    match(
        answers.interests,
        activity.interests,
        25
    );


    /*
        Mood is very important.
    */

    match(
        answers.mood,
        activity.moods,
        15
    );


    /*
        Goals are also very important.
    */

    match(
        answers.goals,
        activity.goals,
        15
    );


    match(
        answers.energy,
        activity.energy,
        10
    );


    match(
        answers.time,
        activity.time,
        10
    );


    match(
        answers.location,
        activity.location,
        8
    );


    match(
        answers.social,
        activity.social,
        7
    );


    match(
        answers.cost,
        activity.cost,
        5
    );


    match(
        answers.effort,
        activity.effort,
        5
    );


    /*
        Future-oriented activities get
        a bonus when the user wants
        something useful for their future.
    */

    if (
        activity.future &&
        answers.goals &&
        (
            answers.goals.includes("future") ||
            answers.goals.includes("extracurricular")
        )
    ) {

        score += 5;

        possible += 5;

    }


    /*
        Adventurous users get a small
        bonus for unusual activities.
    */

    if (
        answers.adventure === "adventurous" &&
        activity.unexpected === true
    ) {

        score += 5;

        possible += 5;

    }


    if (possible === 0) return 0;


    return Math.round(
        (score / possible) * 100
    );

}


/* -------------------------
   WHY THIS MATCHES
------------------------- */

function getMatchReason(activity) {

    const reasons = [];


    if (
        answers.interests &&
        answers.interests.some(
            interest =>
                activity.interests.includes(interest)
        )
    ) {

        reasons.push(
            "matches your interests"
        );

    }


    if (
        answers.mood &&
        activity.moods.includes(answers.mood)
    ) {

        reasons.push(
            "fits your current mood"
        );

    }


    if (
        answers.goals &&
        answers.goals.some(
            goal =>
                activity.goals.includes(goal)
        )
    ) {

        reasons.push(
            "fits what you want to get out of your time"
        );

    }


    if (
        answers.time &&
        activity.time.includes(answers.time)
    ) {

        reasons.push(
            "fits the amount of time you have"
        );

    }


    if (
        answers.cost &&
        activity.cost.includes(answers.cost)
    ) {

        reasons.push(
            "fits your budget"
        );

    }


    if (reasons.length === 0) {

        return "This could be a fun option to try.";

    }


    return "This " + reasons.slice(0, 3).join(", ") + ".";

}


/* -------------------------
   SHOW RESULTS
------------------------- */

function showResults() {

    document.getElementById("questionCard")
        .classList.add("hidden");

    document.getElementById("results")
        .classList.remove("hidden");


    if (
        typeof activities === "undefined" ||
        activities.length === 0
    ) {

        document.getElementById("resultContent").innerHTML = `
            <div class="result-card">
                <h3>Something went wrong</h3>
                <p>
                    We couldn't load the activity database.
                    Please refresh the page.
                </p>
            </div>
        `;

        return;

    }


    const ranked =
        activities
            .map(activity => ({
                ...activity,
                score: calculateScore(activity)
            }))
            .sort((a, b) => b.score - a.score);


    shownResults =
        ranked.slice(0, 5);


    renderResults(shownResults);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* -------------------------
   RENDER RESULTS
------------------------- */

function renderResults(results) {

    const container =
        document.getElementById("resultContent");

    container.innerHTML = "";


    results.forEach((activity, index) => {

        const card =
            document.createElement("div");

        card.className = "result-card";


        const tags =
            activity.interests
                .slice(0, 4)
                .map(tag =>
                    `<span class="tag">${tag}</span>`
                )
                .join("");


        const reason =
            getMatchReason(activity);


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

            <p>
                <strong>Why this matches:</strong>
                ${reason}
            </p>

            <div class="tags">
                ${tags}
            </div>

        `;


        container.appendChild(card);

    });

}


/* -------------------------
   ANOTHER IDEA
------------------------- */

function anotherIdea() {

    const remaining =
        activities
            .map(activity => ({
                ...activity,
                score: calculateScore(activity)
            }))
            .sort((a, b) => b.score - a.score)
            .filter(
                activity =>
                    !shownResults.some(
                        shown =>
                            shown.title === activity.title
                    )
            );


    if (remaining.length === 0) {

        alert(
            "You've seen all of your best matches!"
        );

        return;

    }


    const next =
        remaining.slice(0, 1);


    shownResults.push(next[0]);

    renderResults([next[0]]);

}


/* -------------------------
   RESTART
------------------------- */

function restart() {

    currentQuestion = 0;

    answers = {};

    shownResults = [];


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
