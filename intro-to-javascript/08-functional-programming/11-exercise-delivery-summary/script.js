function summaryFor(deliveries) {
  // Filter delivered parcels, map grams to kilograms, then reduce their weights.
}

function formatSummary(summary) {
  // Return a sentence using the summary's count and totalKg.
}

const deliveries = [
  { status: "delivered", weightGrams: 1500 },
  { status: "in transit", weightGrams: 5000 },
  { status: "delivered", weightGrams: 2000 }
];
const checkSummary = summaryFor([{status:"delivered",weightGrams:750},{status:"in transit",weightGrams:9000},{status:"delivered",weightGrams:1250}]);
const emptySummary = summaryFor([]);
console.log(`CHECK summary: ${checkSummary?.count} parcels | ${checkSummary?.totalKg} kg | empty: ${emptySummary?.count} parcels, ${emptySummary?.totalKg} kg`);
console.log(`CHECK format: ${formatSummary({count:0,totalKg:0})}`);

// Log the supplied deliveries as a separate formatted summary.
