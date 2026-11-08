function reserveSeats(requested, available, callback) {
  if (!Number.isInteger(requested) || requested <= 0 || requested > available) {

// TODO: Step 2: Complete task 2 for new Error("Invalid seat request").
    return;
// TODO: Step 1: Complete task 1 for null.
  }

}


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

// TODO: Step 3: Complete task 3 for reserveSeats(2, 5, callback).
