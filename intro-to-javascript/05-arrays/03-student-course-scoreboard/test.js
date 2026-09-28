test("scores has the course results", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ \[84,91,76\]$/m, "Log CHECK 1: [84,91,76] as a separate checkpoint line");
});

test("courseAverage calculates an average", () => {
  assert.match(OUTPUT, /^CHECK\ 2:\ 83\.66666666666667$/m, "Log CHECK 2: 83.66666666666667 as a separate checkpoint line");
});

test("topScore finds the largest score", () => {
  assert.match(OUTPUT, /^CHECK\ 3:\ 8$/m, "Log CHECK 3: 8 as a separate checkpoint line");
});

test("logs the scoreboard summary", () => {
  assert.match(OUTPUT, /^Average: 83\.66666666666667 \| Top: 91$/m, "Log the full scoreboard summary on its own line");
});
