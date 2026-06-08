test("getGrade is defined", () => {
  assert.equal(typeof getGrade, "function", "Define a function named getGrade");
});

test("getGrade returns correct grades", () => {
  assert.equal(getGrade(95), "A", "getGrade(95) should return 'A'");
  assert.equal(getGrade(85), "B", "getGrade(85) should return 'B'");
  assert.equal(getGrade(75), "C", "getGrade(75) should return 'C'");
  assert.equal(getGrade(65), "D", "getGrade(65) should return 'D'");
  assert.equal(getGrade(50), "F", "getGrade(50) should return 'F'");
});

test("boundary values are handled correctly", () => {
  assert.equal(getGrade(90), "A", "getGrade(90) should return 'A'");
  assert.equal(getGrade(80), "B", "getGrade(80) should return 'B'");
  assert.equal(getGrade(60), "D", "getGrade(60) should return 'D'");
});

test("#output shows Grade: B", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Grade: B", '#output should show "Grade: B"');
});
