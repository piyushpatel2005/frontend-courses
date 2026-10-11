function countPassed(scores) {
  let passed = 0;
  for (const score of scores) {
    if (score >= 60) passed += 1;
  }
  return passed;
}

function countHonors(scores) {
  let honors = 0;
  for (const score of scores) {
    if (score >= 90) honors += 1;
  }
  return honors;
}

function summarizeScores(scores) {
  return `Passed: ${countPassed(scores)} | Honors: ${countHonors(scores)}`;
}

console.log(`Passed counts: ${countPassed([38,74,91,60])},${countPassed([])},${countPassed([59,60,90])}`);
console.log(`Honors counts: ${countHonors([38,74,91,60])},${countHonors([])},${countHonors([89,90,91])}`);
console.log(`Workshop: ${summarizeScores([38,74,91,60])}`);
console.log(`Empty batch: ${summarizeScores([])}`);
console.log(`Boundaries: ${summarizeScores([59,60,90])}`);
