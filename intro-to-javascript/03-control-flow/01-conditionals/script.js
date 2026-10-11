function getGrade(score) {
  // Add the A branch here.
  // Add the B branch here.
  // Add the C branch here.
  // Add the D branch here.
  return undefined; // Replace this fallback for F.
}

// Supplied probes: each line checks one grade range.
console.log(`A range: ${getGrade(90)},${getGrade(95)}`);
console.log(`B range: ${getGrade(80)},${getGrade(89)}`);
console.log(`C range: ${getGrade(70)},${getGrade(79)}`);
console.log(`D range: ${getGrade(60)},${getGrade(69)}`);
console.log(`F range: ${getGrade(0)},${getGrade(59)}`);
