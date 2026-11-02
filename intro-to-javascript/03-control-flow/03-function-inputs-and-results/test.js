test("Function inputs and results: 1", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 1: 17,3,12"), true, "Check the supplied Step 1 line.");
});

test("Function inputs and results: 2", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 2: 22"), true, "Check the supplied Step 2 line.");
});

