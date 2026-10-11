test("Step 1: Filled", () => {
  assert.match(OUTPUT, new RegExp("^Filled:\\ \\[\"A\",\"X\",\"X\",\"X\",\"E\"\\]\\ \\|\\ Source:\\ \\[\"A\",\"B\",\"C\",\"D\",\"E\"\\]$", "m"), "Step 1: expected Filled: [\"A\",\"X\",\"X\",\"X\",\"E\"] | Source: [\"A\",\"B\",\"C\",\"D\",\"E\"]");
});

test("Step 2: [\"A\",\"X\",\"X\",\"X\",\"E\"]", () => {
  assert.match(OUTPUT, new RegExp("^\\[\"A\",\"X\",\"X\",\"X\",\"E\"\\]$", "m"), "Step 2: expected [\"A\",\"X\",\"X\",\"X\",\"E\"]");
});
