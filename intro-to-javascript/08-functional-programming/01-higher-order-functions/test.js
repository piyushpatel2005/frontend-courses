test("Multiplying closure", () => {
  assert.match(OUTPUT, /^CHECK multiplier: 21 \| 20$/m, "Expected this standalone Console line: CHECK multiplier: 21 | 20");
});

test("Standalone product", () => {
  assert.match(OUTPUT, /^21$/m, "Expected this standalone Console line: 21");
});
