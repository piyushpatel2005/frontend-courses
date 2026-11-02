function deliveredOnly(deliveries) { return deliveries.filter(parcel => parcel.status === "delivered"); }
function weightsInKg(deliveries) { return deliveries.map(parcel => parcel.weightGrams / 1000); }
function sumWeights(weights) { return weights.reduce((sum, kg) => sum + kg, 0); }
// Connect the helpers after each one works.
function summaryFor(deliveries) { const delivered = deliveredOnly(deliveries);
  return { count: delivered.length, totalKg: sumWeights(weightsInKg(delivered)) }; }
function formatSummary(summary) { return `Delivered ${summary.count} parcels weighing ${summary.totalKg} kg`; }
const deliveries = [
  { status: "delivered", weightGrams: 1500 },
  { status: "in transit", weightGrams: 5000 },
  { status: "delivered", weightGrams: 2000 }
];
console.log(formatSummary(summaryFor(deliveries)));

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK delivered: ${deliveredOnly(deliveries).map(p => p.weightGrams).join(",")} | original: ${deliveries.length}`);
console.log(`CHECK weights: ${weightsInKg([{weightGrams:750},{weightGrams:1250}]).join(",")}`);
console.log(`CHECK sum: ${sumWeights([0.75,1.25])} | empty: ${sumWeights([])}`);
console.log(`CHECK composed: ${summaryFor(deliveries).count},${summaryFor(deliveries).totalKg} | empty: ${summaryFor([]).count},${summaryFor([]).totalKg}`);
console.log(`CHECK format: ${formatSummary({count:0,totalKg:0})} | ${formatSummary({count:3,totalKg:4})}`);
