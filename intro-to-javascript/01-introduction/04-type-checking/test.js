test("type checks are stored", () => {
  assert.equal(messageType, "string", "messageType should come from typeof 'hello'");
  assert.equal(isList, true, "isList should be true for an array");
});

test("#output shows the type summary", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), "string | true", "#output should show the type summary");
});
