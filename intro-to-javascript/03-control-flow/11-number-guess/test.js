test("findGuess is defined", () => {
  assert.equal(typeof findGuess, "function", "Define findGuess(secret, guesses)");
});

test("findGuess finds the first match", () => {
  assert.equal(findGuess(7, [3, 9, 7, 7]), "Correct: 7");
});

test("findGuess handles no match", () => {
  assert.equal(findGuess(7, [1, 2, 3]), "No match");
});

test("logs the number-guess result", () => {
  assert.includes(OUTPUT, "Correct: 7", "Log the supplied guess game");
});
