test("Checkpoint 1: First spend: 15", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)First\\ spend:\\ 15(?:\\n|$)"), "Log the expected result from your function calls");
});

test("Checkpoint 2: Successive: 17,10", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Successive:\\ 17,10(?:\\n|$)"), "Log the expected result from your function calls");
});

test("Checkpoint 3: Overdraw: null,6", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Overdraw:\\ null,6(?:\\n|$)"), "Log the expected result from your function calls");
});

test("Checkpoint 4: Independent: 8,19", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Independent:\\ 8,19(?:\\n|$)"), "Log the expected result from your function calls");
});
