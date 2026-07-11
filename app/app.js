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
