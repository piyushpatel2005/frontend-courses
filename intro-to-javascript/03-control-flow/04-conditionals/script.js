function getGrade(score) {
  // TODO: Step 1: Add the A branch for scores at least 90.
  // Add the A branch here.
// TODO: Step 2: Add the B branch after A for scores at least 80.
  // Add the B branch here.
// TODO: Step 3: Add the C branch after B for scores at least 70.
  // Add the C branch here.
// TODO: Step 4: Add the D branch after C for scores at least 60.
  // Add the D branch here.
  // TODO: Step 5: Replace the fallback with a return of "F" for all remaining scores.
return undefined; // Replace this fallback for F.
}

// Supplied probes: each line checks one grade range.
console.log(`A range: ${getGrade(90)},${getGrade(95)}`);
console.log(`B range: ${getGrade(80)},${getGrade(89)}`);
console.log(`C range: ${getGrade(70)},${getGrade(79)}`);
console.log(`D range: ${getGrade(60)},${getGrade(69)}`);
console.log(`F range: ${getGrade(0)},${getGrade(59)}`);
