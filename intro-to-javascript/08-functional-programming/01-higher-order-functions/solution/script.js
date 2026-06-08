function makeMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const triple = makeMultiplier(3);
document.getElementById("output").textContent = String(triple(7));
