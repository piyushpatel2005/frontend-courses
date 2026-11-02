// TODO: Step 1: Implement countPassed(scores) with a loop that counts scores at least 60.
function countPassed(scores) {
  // Count scores of at least 60 here.
}

// TODO: Step 2: Implement countHonors(scores) with a loop that counts scores at least 90.
function countHonors(scores) {
  // Count scores of at least 90 here.
}

// TODO: Step 3: Implement summarizeScores(scores) to return Passed: N | Honors: N using both helpers.
function summarizeScores(scores) {
  // Build the report from the two counts here.
}

console.log(`Passed counts: ${countPassed([38,74,91,60])},${countPassed([])},${countPassed([59,60,90])}`);
console.log(`Honors counts: ${countHonors([38,74,91,60])},${countHonors([])},${countHonors([89,90,91])}`);
console.log(`Workshop: ${summarizeScores([38,74,91,60])}`);
console.log(`Empty batch: ${summarizeScores([])}`);
console.log(`Boundaries: ${summarizeScores([59,60,90])}`);
