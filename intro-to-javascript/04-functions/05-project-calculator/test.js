test("Step 1: Add", () => {
  assert.match(OUTPUT, new RegExp("^Add:\\ 7,0,5$", "m"), "Step 1: expected Add: 7,0,5");
});

test("Step 2: Subtract", () => {
  assert.match(OUTPUT, new RegExp("^Subtract:\\ 6,\\-3$", "m"), "Step 2: expected Subtract: 6,-3");
});

test("Step 3: Multiply", () => {
  assert.match(OUTPUT, new RegExp("^Multiply:\\ 15,0,\\-6$", "m"), "Step 3: expected Multiply: 15,0,-6");
});

test("Step 4: Divide", () => {
  assert.match(OUTPUT, new RegExp("^Divide:\\ 5,null,0,1\\.5$", "m"), "Step 4: expected Divide: 5,null,0,1.5");
});

test("Step 5: Calculate", () => {
  assert.match(OUTPUT, new RegExp("^Calculate:\\ 15,7,42,3,null,null$", "m"), "Step 5: expected Calculate: 15,7,42,3,null,null");
});

test("Step 6: 10 + 5 = 15", () => {
  assert.match(OUTPUT, new RegExp("^10\\ \\+\\ 5\\ =\\ 15$", "m"), "Step 6: expected 10 + 5 = 15");
});

test("Step 7: 8 / 0 = Error", () => {
  assert.match(OUTPUT, new RegExp("^8\\ /\\ 0\\ =\\ Error:\\ Division\\ by\\ zero$", "m"), "Step 7: expected 8 / 0 = Error: Division by zero");
});
