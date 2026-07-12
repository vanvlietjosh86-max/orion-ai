// ORION Application Logic
// Version 0.1.1-alpha

console.log("ORION is online.");


const orionResponses = {
    welcome:
        "Hello Josh. I am ORION, your intelligent investing companion.",

    etf:
        "An ETF is a collection of investments bundled together. Instead of buying one company, you can own small pieces of many companies at once, which can help reduce risk.",

    investing:
        "Investing is the process of putting money into assets that may grow in value over time. The goal is usually long-term wealth creation rather than quick profits."
};


function askOrion() {

    alert(orionResponses.welcome);

}

// ORION Navigation System

function showSection(sectionName) {

    const sections = [
        "home",
        "learn",
        "portfolio",
        "settings"
    ];

    sections.forEach(function(section) {

        const element = document.getElementById(section);

        if (element) {

            if (section === sectionName) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }

        }

    });

}
// ORION Startup

window.onload = function() {

    showSection("home");

};
// ORION Learning Engine

function loadLessons() {

    const lessonContainer = document.getElementById("lesson-list");

    if (!lessonContainer) {
        return;
    }


    let output = "";


    lessons.forEach(function(lesson) {

        output += `

        <div class="card">

            <h4>${lesson.title}</h4>

            <p>
            Level: ${lesson.level}
            </p>

            <p>
            ${lesson.content}
            </p>

        </div>

        `;

    });


    lessonContainer.innerHTML = output;

}
// ORION Explain Like I'm New Engine


function explainTopic(topic) {


    const box = document.getElementById("explanation-box");


    if (!box) {
        return;
    }


    const explanation = explanations[topic];


    if (explanation) {


        box.innerHTML = `

        <h4>${explanation.title}</h4>

        <p>
        ${explanation.simple}
        </p>

        <p>
        <strong>Example:</strong>
        ${explanation.example}
        </p>

        `;


    } else {


        box.innerHTML =
        "ORION does not have an explanation for that topic yet.";

    }

}
export function calculateInvestorHealth(user) {
    return {
        overall: 84,
        diversification: 17,
        consistency: 20,
        risk: 14,
        knowledge: 18,
        discipline: 15,
        status: "On Course"
    };
}
