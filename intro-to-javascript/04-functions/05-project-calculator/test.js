test("Checkpoint 1: Add 3,4: 7", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Add\\ 3,4:\\ 7(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 2: Subtract 10,4: 6", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Subtract\\ 10,4:\\ 6(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 3: Multiply 3,5: 15", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Multiply\\ 3,5:\\ 15(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 4: Divide cases: 5,null", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Divide\\ cases:\\ 5,null(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 5: Calculate cases: 15,7,42,3,null,null", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Calculate\\ cases:\\ 15,7,42,3,null,null(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 6: 10 + 5 = 15", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)10\\ \\+\\ 5\\ =\\ 15(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 7: 8 / 0 = Error: Division by zero", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)8\\ /\\ 0\\ =\\ Error:\\ Division\\ by\\ zero(?:\\n|$)"), "Log this result from your function calls");
});
