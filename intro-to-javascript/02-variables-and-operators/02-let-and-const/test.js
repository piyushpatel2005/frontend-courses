test("greeting is declared as a string", () => {
  assert.equal(typeof greeting, "string", 'Declare `const greeting = "Hello, JavaScript!"`');
  assert.equal(greeting, "Hello, JavaScript!", 'greeting should be "Hello, JavaScript!"');
});

test("score starts at 0 and is increased to 10", () => {
  assert.equal(typeof score, "number", "Declare `let score = 0`");
  assert.equal(score, 10, "Increase score by 10 with `score += 10`");
});

test("#output displays the combined message", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Hello, JavaScript! Score: 10",
    '#output should show "Hello, JavaScript! Score: 10"');
});
