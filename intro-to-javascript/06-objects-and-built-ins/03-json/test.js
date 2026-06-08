test("userJson is a JSON string of user", () => {
  assert.equal(typeof userJson, "string", "userJson should be a string");
  const obj = JSON.parse(userJson);
  assert.equal(obj.name, "Sam", "userJson should contain name: Sam");
  assert.equal(obj.level, 5, "userJson should contain level: 5");
});

test("parsed is an object from apiResponse", () => {
  assert.equal(typeof parsed, "object", "parsed should be an object");
  assert.notEqual(parsed, null, "parsed should not be null");
  assert.equal(parsed.status, "ok", "parsed.status should be 'ok'");
  assert.equal(parsed.count, 42, "parsed.count should be 42");
});

test("deepClone creates an independent copy", () => {
  assert.equal(typeof deepClone, "function", "Define a function named deepClone");
  const original = { a: 1, nested: { b: 2 } };
  const clone = deepClone(original);
  clone.nested.b = 99;
  assert.equal(original.nested.b, 2, "deepClone should not share nested references");
});

test("#output shows the formatted message", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Sam is level 5 | status: ok, count: 42",
    '#output should show "Sam is level 5 | status: ok, count: 42"');
});
