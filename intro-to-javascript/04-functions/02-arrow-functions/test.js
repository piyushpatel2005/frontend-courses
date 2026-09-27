test("Checkpoint 1: Square one: 1", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Square\\ one:\\ 1(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 2: Squares: 25,9,0", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Squares:\\ 25,9,0(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 3: Freezing: 0", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Freezing:\\ 0(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 4: Celsius: 36.7,100", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Celsius:\\ 36\\.7,100(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 5: Even zero: true", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Even\\ zero:\\ true(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 6: Parity: true,false", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Parity:\\ true,false(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 7: 5\u00b2 = 25 | 98\u00b0F = 36.7\u00b0C | 4 is even: true", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)5\u00b2\\ =\\ 25\\ \\|\\ 98\u00b0F\\ =\\ 36\\.7\u00b0C\\ \\|\\ 4\\ is\\ even:\\ true(?:\\n|$)"), "Log this result from your function calls");
});
