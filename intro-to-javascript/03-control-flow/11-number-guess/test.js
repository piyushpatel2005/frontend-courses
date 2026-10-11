test("Step 1: Matches", () => {
  assert.match(OUTPUT, /^Matches:\ Correct:\ 2\ \|\ Correct:\ 7\ \|\ Correct:\ 4$/m, "Expected the complete Console line: Matches: Correct: 2 | Correct: 7 | Correct: 4");
});

test("Step 2: Missing", () => {
  assert.match(OUTPUT, /^Missing:\ No\ match\ \|\ No\ match$/m, "Expected the complete Console line: Missing: No match | No match");
});
