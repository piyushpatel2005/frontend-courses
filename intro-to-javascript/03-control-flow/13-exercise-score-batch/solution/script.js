function summarizeScores(scores) {
  let passed = 0;
  let honors = 0;
  for (const score of scores) {
    if (score >= 60) passed += 1;
    if (score >= 90) honors += 1;
  }
  return `Passed: ${passed} | Honors: ${honors}`;
}

console.log(`Single score: ${summarizeScores([74])}`);
console.log(`Workshop: ${summarizeScores([38,74,91,60])}`);
console.log(`Empty batch: ${summarizeScores([])}`);
console.log(`Boundaries: ${summarizeScores([59,60,90])}`);
