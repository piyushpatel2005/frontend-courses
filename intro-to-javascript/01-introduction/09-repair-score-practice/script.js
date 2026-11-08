const basePoints = 12;
const bonusPoints = 3;
const multiplier = 2;
// TODO: Step 1: Correct subtotal to add the two point values; the provided probe will log subtotal: 15.
const subtotal = basePoints * bonusPoints; // Repair the subtotal first.
console.log(`subtotal: ${subtotal}`); // Probe for step 1.
// TODO: Step 2: Correct finalScore to multiply subtotal by multiplier; the provided probe will log final: 30.
const finalScore = basePoints * multiplier + bonusPoints; // Then multiply the subtotal.
console.log(`final: ${finalScore}`); // Probe for step 2.
