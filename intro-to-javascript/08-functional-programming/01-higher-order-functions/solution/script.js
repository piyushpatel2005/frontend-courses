function makeMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

console.log(`CHECK multiplier: ${makeMultiplier(3)(7)} | ${makeMultiplier(4)(5)}`);
console.log(String(makeMultiplier(3)(7)));
