function reserveSeats(requested, available, callback) {
  if (!Number.isInteger(requested) || requested <= 0 || requested > available) {
    callback(new Error("Invalid seat request"), null);
    return;
  }
  callback(null, { reserved: requested, remaining: available - requested });
}

let checkCalls = 0;
reserveSeats(2, 5, (error, result) => {
  checkCalls++;
  console.log(`CHECK reservation: ${error ? error.message : "no error"} | reserved=${result?.reserved} | remaining=${result?.remaining} | calls=${checkCalls}`);
});
const errorCases = [];
for (const requested of [0, -1, 1.5, 6]) {
  let calls = 0;
  reserveSeats(requested, 5, (error, result) => {
    calls++;
    errorCases.push(`${error?.message},${result},${calls}`);
  });
}
console.log(`CHECK errors: ${errorCases.join(" | ")}`);
reserveSeats(2, 5, (error, result) => {
  if (!error) console.log(`Reserved ${result.reserved} seats; ${result.remaining} remain`);
});
