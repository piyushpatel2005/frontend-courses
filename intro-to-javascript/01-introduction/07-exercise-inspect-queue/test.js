test("Step 1: queue: 18 (string)", () => {
  assert.match(OUTPUT, /^queue:\ 18\ \(string\)$/m, "Log queue: 18 (string) as a complete Console line");
});

test("Step 2: seats: 6 (number)", () => {
  assert.match(OUTPUT, /^seats:\ 6\ \(number\)$/m, "Log seats: 6 (number) as a complete Console line");
});

test("Step 3: gate: true (boolean)", () => {
  assert.match(OUTPUT, /^gate:\ true\ \(boolean\)$/m, "Log gate: true (boolean) as a complete Console line");
});
