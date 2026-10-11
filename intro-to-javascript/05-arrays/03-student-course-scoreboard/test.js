test("Step 1: Scores", () => {
  assert.match(OUTPUT, new RegExp("^Scores:\\ \\[84,91,76\\]$", "m"), "Step 1: expected Scores: [84,91,76]");
});

test("Step 2: Averages", () => {
  assert.match(OUTPUT, new RegExp("^Averages:\\ 83\\.66666666666667,3,7$", "m"), "Step 2: expected Averages: 83.66666666666667,3,7");
});

test("Step 3: Tops", () => {
  assert.match(OUTPUT, new RegExp("^Tops:\\ 8,\\-2,7$", "m"), "Step 3: expected Tops: 8,-2,7");
});

test("Step 4: Average", () => {
  assert.match(OUTPUT, new RegExp("^Average:\\ 83\\.66666666666667\\ \\|\\ Top:\\ 91$", "m"), "Step 4: expected Average: 83.66666666666667 | Top: 91");
});
