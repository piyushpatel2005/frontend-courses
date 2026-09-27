test("Step 1: First from -5,3: -5", () => {
  assert.match(OUTPUT, /^First\ from\ \-5,3:\ \-5$/m, "Log First from -5,3: -5 as a complete Console line");
});

test("Step 2: Positive one: 5", () => {
  assert.match(OUTPUT, /^Positive\ one:\ 5$/m, "Log Positive one: 5 as a complete Console line");
});

test("Step 3: First cases: -2,null", () => {
  assert.match(OUTPUT, /^First\ cases:\ \-2,null$/m, "Log First cases: -2,null as a complete Console line");
});

test("Step 4: Positive cases: 3,8 | empty", () => {
  assert.match(OUTPUT, /^Positive\ cases:\ 3,8\ \|\ empty$/m, "Log Positive cases: 3,8 | empty as a complete Console line");
});

test("Step 5: First negative: -5 | Positives: 3,8", () => {
  assert.match(OUTPUT, /^First\ negative:\ \-5\ \|\ Positives:\ 3,8$/m, "Log First negative: -5 | Positives: 3,8 as a complete Console line");
});
