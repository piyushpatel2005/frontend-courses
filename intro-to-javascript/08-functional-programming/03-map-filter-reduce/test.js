test("Engineering names", () => {
  assert.match(OUTPUT, /^CHECK names: Alice,Carol,Eve$/m, "Expected this standalone Console line: CHECK names: Alice,Carol,Eve");
});

test("Average Engineering salary", () => {
  assert.match(OUTPUT, /^CHECK average: 107667$/m, "Expected this standalone Console line: CHECK average: 107667");
});

test("Salary report", () => {
  assert.match(OUTPUT, /^CHECK report: Alice: \$95,000 \| Bob: \$72,000 \| count: 5$/m, "Expected this standalone Console line: CHECK report: Alice: $95,000 | Bob: $72,000 | count: 5");
});

test("Standalone Engineering summary", () => {
  assert.match(OUTPUT, /^Engineers: Alice,Carol,Eve \| Avg salary: \$107,667$/m, "Expected this standalone Console line: Engineers: Alice,Carol,Eve | Avg salary: $107,667");
});
