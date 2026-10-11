test("Step 1: Greeting", () => {
  assert.match(OUTPUT, new RegExp("^Greeting:\\ Hello,\\ Alice!\\ \\|\\ Hello,\\ Bob!\\ \\|\\ Hello,\\ !$", "m"), "Step 1: expected Greeting: Hello, Alice! | Hello, Bob! | Hello, !");
});

test("Step 2: Hello, Alice! | Hello, Bob!", () => {
  assert.match(OUTPUT, new RegExp("^Hello,\\ Alice!\\ \\|\\ Hello,\\ Bob!$", "m"), "Step 2: expected Hello, Alice! | Hello, Bob!");
});
