test("UTC year", () => {
  assert.match(OUTPUT, /^CHECK 1: 2024$/m, "Task 1: expected a separate output line: CHECK 1: 2024");
});

test("One-based UTC month", () => {
  assert.match(OUTPUT, /^CHECK 2: 5$/m, "Task 2: expected a separate output line: CHECK 2: 5");
});

test("UTC day of month", () => {
  assert.match(OUTPUT, /^CHECK 3: 6$/m, "Task 3: expected a separate output line: CHECK 3: 6");
});

test("Padded date label", () => {
  assert.match(OUTPUT, /^2024-05-06$/m, "Task 4: expected a separate output line: 2024-05-06");
});
