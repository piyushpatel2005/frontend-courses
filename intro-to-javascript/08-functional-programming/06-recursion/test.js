test("Power and its base case", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK power: 1024,27,1,2"), true, "Expected checkpoint: CHECK power: 1024,27,1,2");
});

test("Flatten and empty input", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK flatten: 1,2,3,4,5 | empty: 0"), true, "Expected checkpoint: CHECK flatten: 1,2,3,4,5 | empty: 0");
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK other flatten: 9,8,7"), true, "Expected checkpoint: CHECK other flatten: 9,8,7");
});

test("Standalone results", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("2^10 = 1024 | flatten: 1,2,3,4,5"), true, "Expected checkpoint: 2^10 = 1024 | flatten: 1,2,3,4,5");
});
