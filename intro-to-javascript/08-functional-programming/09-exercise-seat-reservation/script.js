function reserveSeats(requested, available, callback) {
  // Call callback with either an error or the reservation result.
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

// Use a callback to log a separate successful reservation message.
