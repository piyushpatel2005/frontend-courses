test("Missing values and deliberate emptiness: 1", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 1: true"), true, "Check the supplied Step 1 line.");
});

test("Missing values and deliberate emptiness: 2", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 2: No note"), true, "Check the supplied Step 2 line.");
});

test("Missing values and deliberate emptiness: 3", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 3: 0"), true, "Check the supplied Step 3 line.");
});

