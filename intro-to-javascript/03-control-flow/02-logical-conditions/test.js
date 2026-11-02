test("Truthiness and combined conditions: 1", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 1: false"), true, "Check the supplied Step 1 line.");
});

test("Truthiness and combined conditions: 2", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 2: true"), true, "Check the supplied Step 2 line.");
});

test("Truthiness and combined conditions: 3", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 3: Wait"), true, "Check the supplied Step 3 line.");
});

