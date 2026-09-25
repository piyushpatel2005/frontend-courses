test("greet returns the expected message", () => {
  assert.equal(typeof greet, "function", "Define greet as a function");
  assert.equal(greet('Alice'), "Hello, Alice!", "greet should return the correct greeting");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "Hello, Alice! | Hello, Bob!", "Log the mission result with console.log()");
});
