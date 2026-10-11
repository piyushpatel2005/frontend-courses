test("Car brand", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("car brand: Roadster"), true, "Expected checkpoint: car brand: Roadster");
});

test("Starting speed", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("car initial speed: 80"), true, "Expected checkpoint: car initial speed: 80");
});

test("Acceleration", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("car speed after accelerate: 100"), true, "Expected checkpoint: car speed after accelerate: 100");
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK another acceleration: 105"), true, "Expected checkpoint: CHECK another acceleration: 105");
});

test("Car summary", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Roadster | 100"), true, "Expected checkpoint: Roadster | 100");
});
