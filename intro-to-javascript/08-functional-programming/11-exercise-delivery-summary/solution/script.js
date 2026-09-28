function summaryFor(deliveries) {
  const delivered = deliveries.filter((parcel) => parcel.status === "delivered");
  const totalKg = delivered
    .map((parcel) => parcel.weightGrams / 1000)
    .reduce((total, kilograms) => total + kilograms, 0);
  return { count: delivered.length, totalKg };
}

function formatSummary(summary) {
  return `Delivered ${summary.count} parcels weighing ${summary.totalKg} kg`;
}

const deliveries = [
  { status: "delivered", weightGrams: 1500 },
  { status: "in transit", weightGrams: 5000 },
  { status: "delivered", weightGrams: 2000 }
];
const checkSummary = summaryFor([{status:"delivered",weightGrams:750},{status:"in transit",weightGrams:9000},{status:"delivered",weightGrams:1250}]);
const emptySummary = summaryFor([]);
console.log(`CHECK summary: ${checkSummary.count} parcels | ${checkSummary.totalKg} kg | empty: ${emptySummary.count} parcels, ${emptySummary.totalKg} kg`);
console.log(`CHECK format: ${formatSummary({count:0,totalKg:0})}`);
console.log(formatSummary(summaryFor(deliveries)));
