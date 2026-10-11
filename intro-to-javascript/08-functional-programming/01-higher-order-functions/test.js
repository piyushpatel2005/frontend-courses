test("Multiplying closure", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK multiplier: 21 | 20"), true, "Expected checkpoint: CHECK multiplier: 21 | 20");
});

test("Standalone product", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("21"), true, "Expected checkpoint: 21");
});
