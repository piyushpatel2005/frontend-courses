test("Step 1: Countdowns", () => {
  assert.match(OUTPUT, /^Countdowns:\ 3,2,1\ \|\ 1\ \|\ \[\]$/m, "Expected the complete Console line: Countdowns: 3,2,1 | 1 | []");
});

test("Step 2: Collatz steps", () => {
  assert.match(OUTPUT, /^Collatz\ steps:\ 0,1,8$/m, "Expected the complete Console line: Collatz steps: 0,1,8");
});

test("Step 3: Countdown from 5", () => {
  assert.match(OUTPUT, /^Countdown\ from\ 5:\ 5,4,3,2,1$/m, "Expected the complete Console line: Countdown from 5: 5,4,3,2,1");
});
