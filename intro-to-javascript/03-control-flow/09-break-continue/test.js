test("Step 1: First cases", () => {
  assert.match(OUTPUT, /^First\ cases:\ \-2,null,null$/m, "Expected the complete Console line: First cases: -2,null,null");
});

test("Step 2: Positive cases", () => {
  assert.match(OUTPUT, /^Positive\ cases:\ 3,8\ \|\ \[\]\ \|\ \[\]$/m, "Expected the complete Console line: Positive cases: 3,8 | [] | []");
});

test("Step 3: First negative", () => {
  assert.match(OUTPUT, /^First\ negative:\ \-5\ \|\ Positives:\ 3,8$/m, "Expected the complete Console line: First negative: -5 | Positives: 3,8");
});
