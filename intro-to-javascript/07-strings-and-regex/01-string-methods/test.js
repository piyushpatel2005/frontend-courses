test("Uppercase transformation", () => {
  assert.match(OUTPUT, /^CHECK uppercase: HELLO WORLD$/m, "Use toUpperCase() on phrase");
});

test("Word membership check", () => {
  assert.match(OUTPUT, /^CHECK includes: true$/m, "Use includes() to check phrase");
});

test("Standalone combined result", () => {
  assert.match(OUTPUT, /^HELLO WORLD \| true$/m, "Log the combined result on its own line");
});
