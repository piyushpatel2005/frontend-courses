function repeatAction(callback) {
  // Run the callback three times.
}

const runs = [];
repeatAction(() => runs.push("run"));
console.log(`CHECK callbacks: ${runs.join(",")}`);
// Log the collected runs on their own Console line.
