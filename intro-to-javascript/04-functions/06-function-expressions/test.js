test("greetStudent is a working function expression", () => {
  assert.equal(typeof greetStudent, 'function', "Define greetStudent as a function expression");
  assert.equal(greetStudent('Maya'), 'Welcome, Maya!', "greetStudent should return the welcome message");
});

test("#output shows the expression result", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), 'Welcome, Maya!', "#output should show the function expression result");
});
