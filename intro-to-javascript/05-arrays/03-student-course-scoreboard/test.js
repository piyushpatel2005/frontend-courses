test("scores has the course results", () => {
  assert.deepEqual(scores, [84, 91, 76]);
});

test("courseAverage calculates an average", () => {
  assert.equal(courseAverage([84, 91, 76]), 251 / 3);
});

test("topScore finds the largest score", () => {
  assert.equal(topScore([84, 91, 76]), 91);
  assert.equal(topScore([3, 8, 4]), 8);
});

test("logs the scoreboard summary", () => {
  assert.includes(OUTPUT, "Top: 91", "Log the scoreboard summary");
});
