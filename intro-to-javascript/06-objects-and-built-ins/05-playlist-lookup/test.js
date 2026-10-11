test("Song duration Map", () => {
  assert.match(OUTPUT, /^CHECK 1: true \| 2 \| 203 \| 187$/m, "Task 1: expected a separate output line: CHECK 1: true | 2 | 203 | 187");
});

test("Unique artist Set", () => {
  assert.match(OUTPUT, /^CHECK 2: true \| 2 \| true \| true$/m, "Task 2: expected a separate output line: CHECK 2: true | 2 | true | true");
});

test("Summary uses its arguments", () => {
  assert.match(OUTPUT, /^CHECK 3: 203 \| 2 \/ 99 \| 1$/m, "Task 3: expected a separate output line: CHECK 3: 203 | 2 / 99 | 1");
});

test("Separate playlist summary", () => {
  assert.match(OUTPUT, /^203 \| 2$/m, "Task 4: expected a separate output line: 203 | 2");
});
