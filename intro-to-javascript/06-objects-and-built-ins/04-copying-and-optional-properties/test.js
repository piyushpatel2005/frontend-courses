test("Object copies and optional properties: 1", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 1: Morning,Evening,true"), true, "Check the supplied Step 1 line.");
});

test("Object copies and optional properties: 2", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 2: Unknown"), true, "Check the supplied Step 2 line.");
});

test("Object copies and optional properties: 3", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Step 3: 0"), true, "Check the supplied Step 3 line.");
});

