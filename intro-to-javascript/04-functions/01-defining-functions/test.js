test("greet returns the expected message", () => {
  assert.equal(typeof greet, "function", "Define greet as a function");
  assert.equal(greet('Alice'), "Hello, Alice!", "greet should return the correct greeting");
});

test("#output shows two greetings", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), "Hello, Alice! | Hello, Bob!", "#output should show two greeting results");
});
