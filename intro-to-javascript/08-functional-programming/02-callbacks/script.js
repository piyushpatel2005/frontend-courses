// TODO: Step 1: Make repeatAction(callback) call its callback exactly three times.
function repeatAction(callback) {
  // Call the supplied function three times.
}
const runs = [];
repeatAction(() => runs.push("run"));
// Log runs here.

// Supplied checkpoints. Do not replace them with fixed answers.
// TODO: Step 2: Log the collected runs with commas between them, on one standalone line.
console.log(`CHECK callbacks: ${runs.join(",")}`);
