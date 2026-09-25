test("greetStudent is a working function expression", () => {
  assert.equal(typeof greetStudent, 'function', "Define greetStudent as a function expression");
  assert.equal(greetStudent('Maya'), 'Welcome, Maya!', "greetStudent should return the welcome message");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "Welcome, Maya!", "Log the mission result with console.log()");
});
