test("Step 1: Flat", () => {
  assert.match(OUTPUT, new RegExp("^Flat:\\ \\[1,2,3,4\\]$", "m"), "Step 1: expected Flat: [1,2,3,4]");
});

test("Step 2: Words", () => {
  assert.match(OUTPUT, new RegExp("^Words:\\ \\[\"hello\",\"world\",\"js\"\\]$", "m"), "Step 2: expected Words: [\"hello\",\"world\",\"js\"]");
});
