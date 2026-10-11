function makeMultiplier(multiplier) {
  return function (value) { return value * multiplier; };
}
console.log(makeMultiplier(3)(7));

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK multiplier: ${makeMultiplier(3)?.(7)} | ${makeMultiplier(4)?.(5)}`);
