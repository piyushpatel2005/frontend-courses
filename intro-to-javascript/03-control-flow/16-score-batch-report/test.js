test("Step 1: Passed counts", () => {
  assert.match(OUTPUT, /^Passed\ counts:\ 3,0,2$/m, "Expected the complete Console line: Passed counts: 3,0,2");
});

test("Step 2: Honors counts", () => {
  assert.match(OUTPUT, /^Honors\ counts:\ 1,0,2$/m, "Expected the complete Console line: Honors counts: 1,0,2");
});

test("Step 3: Workshop", () => {
  assert.match(OUTPUT, /^Workshop:\ Passed:\ 3\ \|\ Honors:\ 1$/m, "Expected the complete Console line: Workshop: Passed: 3 | Honors: 1");
  assert.match(OUTPUT, /^Empty\ batch:\ Passed:\ 0\ \|\ Honors:\ 0$/m, "Expected the complete Console line: Empty batch: Passed: 0 | Honors: 0");
  assert.match(OUTPUT, /^Boundaries:\ Passed:\ 2\ \|\ Honors:\ 1$/m, "Expected the complete Console line: Boundaries: Passed: 2 | Honors: 1");
});
