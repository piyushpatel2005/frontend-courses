test("firstName and lastName are destructured", () => {
  assert.equal(firstName, "Jordan", "Destructure firstName from student");
  assert.equal(lastName, "Lee", "Destructure lastName from student");
});

test("fullName returns combined name", () => {
  assert.equal(typeof fullName, "function", "Define a function named fullName");
  assert.equal(fullName(student), "Jordan Lee", "fullName should return 'Jordan Lee'");
});

test("averageScore returns correct average", () => {
  assert.equal(typeof averageScore, "function", "Define a function named averageScore");
  assert.equal(averageScore(student), 87.8, "Average of [88,92,79,95,85] should be 87.8");
});

test("#output shows the formatted message", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Jordan Lee — avg: 87.8",
    '#output should show "Jordan Lee — avg: 87.8"');
});
