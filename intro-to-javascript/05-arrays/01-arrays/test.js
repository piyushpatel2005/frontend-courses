test("Step 1: Colors", () => {
  assert.match(OUTPUT, new RegExp("^Colors:\\ \\[\"red\",\"green\",\"blue\"\\]$", "m"), "Step 1: expected Colors: [\"red\",\"green\",\"blue\"]");
});

test("Step 2: red | blue", () => {
  assert.match(OUTPUT, new RegExp("^red\\ \\|\\ blue$", "m"), "Step 2: expected red | blue");
});
