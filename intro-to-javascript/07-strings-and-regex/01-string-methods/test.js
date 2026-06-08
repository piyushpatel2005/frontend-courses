test("string methods return the expected values", () => {
  assert.equal(upperPhrase, 'HELLO WORLD', "upperPhrase should be uppercase");
  assert.equal(hasWorld, true, "hasWorld should be true");
});

test("#output shows the string summary", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), 'HELLO WORLD | true', "#output should show the uppercase text and boolean result");
});
