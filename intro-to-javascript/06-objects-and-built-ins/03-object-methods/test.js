test("Destructured names", () => {
  assert.match(OUTPUT, /^CHECK 1: Jordan \| Lee$/m, "Task 1: expected a separate output line: CHECK 1: Jordan | Lee");
});

test("Full name for different records", () => {
  assert.match(OUTPUT, /^CHECK 2: Jordan Lee \| Ari Chen$/m, "Task 2: expected a separate output line: CHECK 2: Jordan Lee | Ari Chen");
});

test("Average and one-decimal rounding", () => {
  assert.match(OUTPUT, /^CHECK 3: 87\.8 \| 1\.7 \| 0$/m, "Task 3: expected a separate output line: CHECK 3: 87.8 | 1.7 | 0");
});

test("Separate student average", () => {
  assert.match(OUTPUT, /^Jordan Lee — avg: 87\.8$/m, "Task 4: expected a separate output line: Jordan Lee \u2014 avg: 87.8");
});
