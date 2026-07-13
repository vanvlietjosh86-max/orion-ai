// ======================================
// ORION Scoring Engine v0.1
// ======================================

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function scoreDiversification(value) {
    return clamp(value, 0, 20);
}

function scoreConsistency(value) {
    return clamp(value, 0, 20);
}

function scoreRisk(value) {
    return clamp(value, 0, 20);
}

function scoreKnowledge(value) {
    return clamp(value, 0, 20);
}

function scoreDiscipline(value) {
    return clamp(value, 0, 20);
}
