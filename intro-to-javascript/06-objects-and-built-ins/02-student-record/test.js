test("student has the required key-value pairs", () => {
  assert.match(OUTPUT, /^CHECK 1: Riley \| JavaScript \| 88$/m, "Log CHECK 1 from the initial student object");
});
test("student score updates", () => {
  assert.match(OUTPUT, /^CHECK 2: 92$/m, "Log CHECK 2 from the updated score");
});

test("student has enrolled status", () => {
  assert.match(OUTPUT, /^CHECK 3: enrolled$/m, "Log CHECK 3 from the added status");
});

test("logs the updated student record", () => {
  assert.match(OUTPUT, /^Riley \| JavaScript \| 92 \| enrolled$/m, "Log the exact student record summary");
});
