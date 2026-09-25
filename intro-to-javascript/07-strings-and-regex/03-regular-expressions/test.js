test("isValidEmail validates correctly", () => {
  assert.equal(typeof isValidEmail, "function", "Define isValidEmail");
  assert.equal(isValidEmail("alice@example.com"), true, "Valid email should return true");
  assert.equal(isValidEmail("bob@domain.org"), true, "Valid email should return true");
  assert.equal(isValidEmail("notanemail"), false, "No @ sign should return false");
  assert.equal(isValidEmail("@domain.com"), false, "Empty local part should return false");
});

test("extractNumbers finds all numbers", () => {
  assert.equal(typeof extractNumbers, "function", "Define extractNumbers");
  assert.deepEqual(extractNumbers("I have 3 cats and 12 dogs"), ["3", "12"],
    "Should extract ['3', '12']");
  assert.deepEqual(extractNumbers("no numbers here"), [],
    "Should return empty array when no numbers");
});

test("maskEmail masks correctly", () => {
  assert.equal(typeof maskEmail, "function", "Define maskEmail");
  assert.equal(maskEmail("alice@example.com"), "a****@example.com",
    "Should mask 'alice' to 'a****'");
  assert.equal(maskEmail("bob@domain.org"), "b**@domain.org",
    "Should mask 'bob' to 'b**'");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "valid: true | numbers: 3,12 | masked: a****@example.com", "Log the mission result with console.log()");
});
