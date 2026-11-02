test("JSON string contains the user data", () => {
  assert.match(OUTPUT, /^CHECK 1: string \| Sam \| 5 \| true$/m, "Task 1: expected a separate output line: CHECK 1: string | Sam | 5 | true");
});

test("Parsed response properties", () => {
  assert.match(OUTPUT, /^CHECK 2: ok \| 42$/m, "Task 2: expected a separate output line: CHECK 2: ok | 42");
});

test("Separate nested JSON-safe copy", () => {
  assert.match(OUTPUT, /^CHECK 3: 2 \| 2 \| true \| 3,4$/m, "Task 3: expected a separate output line: CHECK 3: 2 | 2 | true | 3,4");
});

test("Copy-only nested update", () => {
  assert.match(OUTPUT, /^CHECK 4: 2 \| 99$/m, "Task 4: expected a separate output line: CHECK 4: 2 | 99");
});

test("Separate user summary", () => {
  assert.match(OUTPUT, /^Sam is level 5 \| status: ok, count: 42$/m, "Task 5: expected a separate output line: Sam is level 5 | status: ok, count: 42");
});
