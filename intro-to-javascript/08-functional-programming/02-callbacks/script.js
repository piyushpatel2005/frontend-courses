function repeatAction(callback) {
  // Call the supplied function three times.
}
const runs = [];
repeatAction(() => runs.push("run"));
// Log runs here.

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK callbacks: ${runs.join(",")}`);
