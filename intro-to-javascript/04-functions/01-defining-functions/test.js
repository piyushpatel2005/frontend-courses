test("Checkpoint 1: Greeting: Hello, Alice!", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Greeting:\\ Hello,\\ Alice!(?:\\n|$)"), "Log this result from your function calls");
});

test("Checkpoint 2: Hello, Alice! | Hello, Bob!", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Hello,\\ Alice!\\ \\|\\ Hello,\\ Bob!(?:\\n|$)"), "Log this result from your function calls");
});
