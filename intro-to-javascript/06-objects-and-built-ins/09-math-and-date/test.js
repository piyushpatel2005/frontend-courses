test("Round upward", () => {
  assert.match(OUTPUT, /^CHECK 1: 5$/m, "Task 1: expected a separate output line: CHECK 1: 5");
});

test("Read the fixed UTC year", () => {
  assert.match(OUTPUT, /^CHECK 2: 2024$/m, "Task 2: expected a separate output line: CHECK 2: 2024");
});

test("Separate quantity and year", () => {
  assert.match(OUTPUT, /^5 \| 2024$/m, "Task 3: expected a separate output line: 5 | 2024");
});
