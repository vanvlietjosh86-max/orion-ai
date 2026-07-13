
// ======================================
// ORION Investor Health Engine v0.1
// ======================================

function calculateInvestorHealth() {

    const health = {
        diversification: scoreDiversification(17),
        consistency: scoreConsistency(20),
risk: scoreRisk(14),
knowledge: scoreKnowledge(18),
discipline: scoreDiscipline(15),
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
