test("Step 1: Total", () => {
  assert.match(OUTPUT, new RegExp("^Total:\\ 30$", "m"), "Step 1: expected Total: 30");
});

test("Step 2: Adult", () => {
  assert.match(OUTPUT, new RegExp("^Adult:\\ true$", "m"), "Step 2: expected Adult: true");
});

test("Step 3: Positive", () => {
  assert.match(OUTPUT, new RegExp("^Positive:\\ true$", "m"), "Step 3: expected Positive: true");
});

test("Step 4: 30 | true | true", () => {
  assert.match(OUTPUT, new RegExp("^30\\ \\|\\ true\\ \\|\\ true$", "m"), "Step 4: expected 30 | true | true");
});
