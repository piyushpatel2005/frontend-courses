test("greeting is declared as a string", () => {
  assert.equal(typeof greeting, "string", 'Declare `const greeting = "Hello, JavaScript!"`');
  assert.equal(greeting, "Hello, JavaScript!", 'greeting should be "Hello, JavaScript!"');
});

test("score starts at 0 and is increased to 10", () => {
  assert.equal(typeof score, "number", "Declare `let score = 0`");
  assert.equal(score, 10, "Increase score by 10 with `score += 10`");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "Hello, JavaScript! Score: 10", "Log the mission result with console.log()");
});
