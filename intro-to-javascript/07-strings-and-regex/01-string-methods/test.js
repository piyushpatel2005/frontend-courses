test("string methods return the expected values", () => {
  assert.equal(upperPhrase, 'HELLO WORLD', "upperPhrase should be uppercase");
  assert.equal(hasWorld, true, "hasWorld should be true");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "HELLO WORLD | true", "Log the mission result with console.log()");
});
