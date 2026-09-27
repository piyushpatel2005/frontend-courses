test("Checkpoint 1: Counter calls: 1,2", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Counter\\ calls:\\ 1,2(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 2: 1 | 2 | 3", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)1\\ \\|\\ 2\\ \\|\\ 3(?:\\n|$)"), "Log this result from your function calls");
});
