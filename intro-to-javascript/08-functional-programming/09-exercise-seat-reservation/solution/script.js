function reserveSeats(requested, available, callback) {
  if (!Number.isInteger(requested) || requested <= 0 || requested > available) {
    callback(new Error("Invalid seat request"), null);
    return;
  }
  callback(null, {reserved: requested, remaining: available - requested});
}
reserveSeats(2, 5, (error, result) => {
  if (!error) console.log(`Reserved ${result.reserved} seats; ${result.remaining} remain`);
});

// Supplied checkpoints. Do not replace them with fixed answers.
function probeReservation(requested, available) {
  const calls = [];
  reserveSeats(requested, available, (error, result) => {
    calls.push(`${error instanceof Error ? error.message : error},${result === null ? "null" : `${result?.reserved},${result?.remaining}`}`);
  });
  return `${calls.length}: ${calls.join(";")}`;
}
console.log(`CHECK success: ${probeReservation(2,5)} | ${probeReservation(5,5)}`);
console.log(`CHECK invalid: ${[0,-1,1.5,6].map(n => probeReservation(n,5)).join(" | ")}`);
