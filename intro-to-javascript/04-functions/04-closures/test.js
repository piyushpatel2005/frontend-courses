test("Step 1: Counter calls", () => {
  assert.match(OUTPUT, new RegExp("^Counter\\ calls:\\ 1,2,1,3$", "m"), "Step 1: expected Counter calls: 1,2,1,3");
});

test("Step 2: 1 | 2 | 3", () => {
  assert.match(OUTPUT, new RegExp("^1\\ \\|\\ 2\\ \\|\\ 3$", "m"), "Step 2: expected 1 | 2 | 3");
});
