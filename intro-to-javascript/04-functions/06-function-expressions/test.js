test("Checkpoint 1: Welcome test: Welcome, Maya!", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Welcome\\ test:\\ Welcome,\\ Maya!(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 2: Welcome, Maya!", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Welcome,\\ Maya!(?:\\n|$)"), "Log this result from your function calls");
});
