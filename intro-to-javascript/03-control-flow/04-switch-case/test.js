test("Step 1: Weekends", () => {
  assert.match(OUTPUT, /^Weekends:\ Weekend,Weekend$/m, "Expected the complete Console line: Weekends: Weekend,Weekend");
});

test("Step 2: Weekdays", () => {
  assert.match(OUTPUT, /^Weekdays:\ Weekday,Weekday,Weekday,Weekday,Weekday$/m, "Expected the complete Console line: Weekdays: Weekday,Weekday,Weekday,Weekday,Weekday");
});

test("Step 3: Unknown names", () => {
  assert.match(OUTPUT, /^Unknown\ names:\ Unknown,Unknown$/m, "Expected the complete Console line: Unknown names: Unknown,Unknown");
});
