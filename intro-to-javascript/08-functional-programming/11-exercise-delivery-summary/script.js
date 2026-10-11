function deliveredOnly(deliveries) { return []; }
function weightsInKg(deliveries) { return []; }
function sumWeights(weights) {  }
// Connect the helpers after each one works.
function summaryFor(deliveries) { return { count: 0, totalKg: 0 }; }
function formatSummary(summary) {  }
const deliveries = [
  { status: "delivered", weightGrams: 1500 },
  { status: "in transit", weightGrams: 5000 },
  { status: "delivered", weightGrams: 2000 }
];


// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK delivered: ${deliveredOnly(deliveries).map(p => p.weightGrams).join(",")} | original: ${deliveries.length}`);
console.log(`CHECK weights: ${weightsInKg([{weightGrams:750},{weightGrams:1250}]).join(",")}`);
console.log(`CHECK sum: ${sumWeights([0.75,1.25])} | empty: ${sumWeights([])}`);
console.log(`CHECK composed: ${summaryFor(deliveries).count},${summaryFor(deliveries).totalKg} | empty: ${summaryFor([]).count},${summaryFor([]).totalKg}`);
console.log(`CHECK format: ${formatSummary({count:0,totalKg:0})} | ${formatSummary({count:3,totalKg:4})}`);
