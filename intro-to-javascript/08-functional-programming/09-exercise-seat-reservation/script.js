function reserveSeats(requested, available, callback) {
  if (!Number.isInteger(requested) || requested <= 0 || requested > available) {

    return;
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
