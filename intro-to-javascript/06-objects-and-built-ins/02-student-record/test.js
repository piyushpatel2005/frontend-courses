test("Initial student properties", () => {
  assert.match(OUTPUT, /^CHECK 1: Riley \| JavaScript \| 88$/m, "Task 1: expected a separate output line: CHECK 1: Riley | JavaScript | 88");
});

test("Updated score", () => {
  assert.match(OUTPUT, /^CHECK 2: 92$/m, "Task 2: expected a separate output line: CHECK 2: 92");
});

test("Enrolled status", () => {
  assert.match(OUTPUT, /^CHECK 3: enrolled$/m, "Task 3: expected a separate output line: CHECK 3: enrolled");
});

test("Separate student summary", () => {
  assert.match(OUTPUT, /^Riley \| JavaScript \| 92 \| enrolled$/m, "Task 4: expected a separate output line: Riley | JavaScript | 92 | enrolled");
});
