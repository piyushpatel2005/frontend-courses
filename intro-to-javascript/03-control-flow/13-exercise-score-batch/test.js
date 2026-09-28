test("Step 1: Single score: Passed: 1 | Honors: 0", () => {
  assert.match(OUTPUT, /^Single\ score:\ Passed:\ 1\ \|\ Honors:\ 0$/m, "Log Single score: Passed: 1 | Honors: 0 as a complete Console line");
});

test("Step 2: Workshop: Passed: 3 | Honors: 1", () => {
  assert.match(OUTPUT, /^Workshop:\ Passed:\ 3\ \|\ Honors:\ 1$/m, "Log Workshop: Passed: 3 | Honors: 1 as a complete Console line");
});

test("Step 3: Empty batch: Passed: 0 | Honors: 0", () => {
  assert.match(OUTPUT, /^Empty\ batch:\ Passed:\ 0\ \|\ Honors:\ 0$/m, "Log Empty batch: Passed: 0 | Honors: 0 as a complete Console line");
});

test("Step 4: Boundaries: Passed: 2 | Honors: 1", () => {
  assert.match(OUTPUT, /^Boundaries:\ Passed:\ 2\ \|\ Honors:\ 1$/m, "Log Boundaries: Passed: 2 | Honors: 1 as a complete Console line");
});
