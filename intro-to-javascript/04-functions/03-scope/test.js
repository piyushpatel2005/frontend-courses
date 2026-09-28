test("Checkpoint 1: Label: Frontend Lab - Variables", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Label:\\ Frontend\\ Lab\\ \\-\\ Variables(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 2: Frontend Lab - Variables", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Frontend\\ Lab\\ \\-\\ Variables(?:\\n|$)"), "Log this result from your function calls");
});
