
// ======================================
// ORION Investor Health Engine v0.1
// ======================================

function calculateInvestorHealth() {

    const health = {
        diversification: 17,
        consistency: 20,
        risk: 14,
        knowledge: 18,
        discipline: 15
    };

    health.overall =
        health.diversification +
        health.consistency +
        health.risk +
        health.knowledge +
        health.discipline;

    if (health.overall >= 80) {
        health.status = "On Course";
    } else if (health.overall >= 60) {
        health.status = "Needs Attention";
    } else {
        health.status = "High Risk";
    }

    return health;
}
