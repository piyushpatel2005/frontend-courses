test("Throwing and catching errors: 1", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 1: 0,8,Invalid capacity,Invalid capacity,Invalid capacity,Invalid capacity"), true, "Check the supplied Step 1 line.");
});

test("Throwing and catching errors: 2", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 2: true,42,true"), true, "Check the supplied Step 2 line.");
});

