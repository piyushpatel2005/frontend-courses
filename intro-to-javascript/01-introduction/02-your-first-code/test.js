test("Step 1: message: Ada", () => {
  assert.match(OUTPUT, /^message:\ Ada$/m, "Log message: Ada as a complete Console line");
});

test("Step 2: division: 25", () => {
  assert.match(OUTPUT, /^division:\ 25$/m, "Log division: 25 as a complete Console line");
});

test("Step 3: Ada | 25", () => {
  assert.match(OUTPUT, /^Ada\ \|\ 25$/m, "Log Ada | 25 as a complete Console line");
});
