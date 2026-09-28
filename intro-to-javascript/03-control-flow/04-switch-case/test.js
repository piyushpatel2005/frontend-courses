test("Step 1: Sunday: Weekend", () => {
  assert.match(OUTPUT, /^Sunday:\ Weekend$/m, "Log Sunday: Weekend as a complete Console line");
});

test("Step 2: Weekend pair: Weekend,Weekend", () => {
  assert.match(OUTPUT, /^Weekend\ pair:\ Weekend,Weekend$/m, "Log Weekend pair: Weekend,Weekend as a complete Console line");
});

test("Step 3: Weekdays: Weekday,Weekday,Weekday,Weekday,Weekday", () => {
  assert.match(OUTPUT, /^Weekdays:\ Weekday,Weekday,Weekday,Weekday,Weekday$/m, "Log Weekdays: Weekday,Weekday,Weekday,Weekday,Weekday as a complete Console line");
});

test("Step 4: Holiday: Unknown", () => {
  assert.match(OUTPUT, /^Holiday:\ Unknown$/m, "Log Holiday: Unknown as a complete Console line");
});

test("Step 5: Saturday: Weekend", () => {
  assert.match(OUTPUT, /^Saturday:\ Weekend$/m, "Log Saturday: Weekend as a complete Console line");
});
