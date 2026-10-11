function repeatAction(callback) {
  for (let i = 0; i < 3; i++) callback();
}
const runs = [];
repeatAction(() => runs.push("run"));
console.log(runs.join(","));

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK callbacks: ${runs.join(",")}`);
