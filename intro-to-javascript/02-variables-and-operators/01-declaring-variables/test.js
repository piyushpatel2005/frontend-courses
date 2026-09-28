test("Step 1: food: tacos", () => {
  assert.match(OUTPUT, /^food:\ tacos$/m, "Log food: tacos as a complete Console line");
});

test("Step 2: initial number: 5", () => {
  assert.match(OUTPUT, /^initial\ number:\ 5$/m, "Log initial number: 5 as a complete Console line");
});

test("Step 3: updated number: 8", () => {
  assert.match(OUTPUT, /^updated\ number:\ 8$/m, "Log updated number: 8 as a complete Console line");
});

test("Step 4: tacos | 8", () => {
  assert.match(OUTPUT, /^tacos\ \|\ 8$/m, "Log tacos | 8 as a complete Console line");
});
