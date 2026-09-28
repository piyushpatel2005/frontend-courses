test("Step 1: First guess: Correct: 2", () => {
  assert.match(OUTPUT, /^First\ guess:\ Correct:\ 2$/m, "Log First guess: Correct: 2 as a complete Console line");
});

test("Step 2: Match: Correct: 7", () => {
  assert.match(OUTPUT, /^Match:\ Correct:\ 7$/m, "Log Match: Correct: 7 as a complete Console line");
});

test("Step 3: Missing: No match", () => {
  assert.match(OUTPUT, /^Missing:\ No\ match$/m, "Log Missing: No match as a complete Console line");
});

test("Step 4: Correct: 7", () => {
  assert.match(OUTPUT, /^Correct:\ 7$/m, "Log Correct: 7 as a complete Console line");
});
