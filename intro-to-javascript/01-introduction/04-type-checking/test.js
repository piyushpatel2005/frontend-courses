test("type checks are stored", () => {
  assert.equal(messageType, "string", "messageType should come from typeof 'hello'");
  assert.equal(isList, true, "isList should be true for an array");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "string | true", "Log the mission result with console.log()");
});
