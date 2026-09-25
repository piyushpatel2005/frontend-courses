function makeMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(String(triple(7)));
