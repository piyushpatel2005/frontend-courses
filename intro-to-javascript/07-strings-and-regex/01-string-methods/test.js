test("Uppercase transformation", () => {
  assert.match(OUTPUT, /^CHECK 1: HELLO WORLD$/m, "Task 1: expected a separate output line: CHECK 1: HELLO WORLD");
});

test("Word membership", () => {
  assert.match(OUTPUT, /^CHECK 2: boolean \| true$/m, "Task 2: expected a separate output line: CHECK 2: boolean | true");
});

test("Separate combined result", () => {
  assert.match(OUTPUT, /^HELLO WORLD \| true$/m, "Task 3: expected a separate output line: HELLO WORLD | true");
});
