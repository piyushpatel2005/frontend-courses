const basePoints = 12;
const bonusPoints = 3;
const multiplier = 2;
const subtotal = basePoints * bonusPoints; // Repair the subtotal first.
console.log(`subtotal: ${subtotal}`); // Probe for step 1.
const finalScore = basePoints * multiplier + bonusPoints; // Then multiply the subtotal.
console.log(`final: ${finalScore}`); // Probe for step 2.
