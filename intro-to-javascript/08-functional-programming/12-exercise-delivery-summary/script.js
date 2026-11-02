// TODO: Step 1: Complete task 1 for filter.
function deliveredOnly(deliveries) { return []; }
// TODO: Step 2: Use map in weightsInKg(deliveries) to return their weights in kilograms.
function weightsInKg(deliveries) { return []; }
// TODO: Step 3: Use reduce in sumWeights(weights) to total the numbers, starting from 0.
function sumWeights(weights) {  }
// Connect the helpers after each one works.
// TODO: Step 4: Complete task 4 for summaryFor(deliveries).
function summaryFor(deliveries) { return { count: 0, totalKg: 0 }; }
// TODO: Step 5: Complete task 5 for formatSummary(summary).
function formatSummary(summary) {  }
const deliveries = [
  { status: "delivered", weightGrams: 1500 },
  { status: "in transit", weightGrams: 5000 },
  { status: "delivered", weightGrams: 2000 }
];


// Supplied checkpoints. Do not replace them with fixed answers.
// TODO: Step 6: Log formatSummary(summaryFor(deliveries)) on its own line.
console.log(`CHECK delivered: ${deliveredOnly(deliveries).map(p => p.weightGrams).join(",")} | original: ${deliveries.length}`);
console.log(`CHECK weights: ${weightsInKg([{weightGrams:750},{weightGrams:1250}]).join(",")}`);
console.log(`CHECK sum: ${sumWeights([0.75,1.25])} | empty: ${sumWeights([])}`);
console.log(`CHECK composed: ${summaryFor(deliveries).count},${summaryFor(deliveries).totalKg} | empty: ${summaryFor([]).count},${summaryFor([]).totalKg}`);
console.log(`CHECK format: ${formatSummary({count:0,totalKg:0})} | ${formatSummary({count:3,totalKg:4})}`);
