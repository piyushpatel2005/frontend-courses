test("Comparisons and strict equality: 1", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 1: true"), true, "Check the supplied Step 1 line.");
});

test("Comparisons and strict equality: 2", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 2: false"), true, "Check the supplied Step 2 line.");
});

test("Comparisons and strict equality: 3", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 3: true"), true, "Check the supplied Step 3 line.");
});

