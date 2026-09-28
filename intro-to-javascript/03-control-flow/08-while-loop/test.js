test("Step 1: Countdown one: 1", () => {
  assert.match(OUTPUT, /^Countdown\ one:\ 1$/m, "Log Countdown one: 1 as a complete Console line");
});

test("Step 2: Collatz one: 0", () => {
  assert.match(OUTPUT, /^Collatz\ one:\ 0$/m, "Log Collatz one: 0 as a complete Console line");
});

test("Step 3: Countdown three: 3,2,1", () => {
  assert.match(OUTPUT, /^Countdown\ three:\ 3,2,1$/m, "Log Countdown three: 3,2,1 as a complete Console line");
});

test("Step 4: Collatz six: 8", () => {
  assert.match(OUTPUT, /^Collatz\ six:\ 8$/m, "Log Collatz six: 8 as a complete Console line");
});

test("Step 5: Countdown from 5: 5,4,3,2,1", () => {
  assert.match(OUTPUT, /^Countdown\ from\ 5:\ 5,4,3,2,1$/m, "Log Countdown from 5: 5,4,3,2,1 as a complete Console line");
});
