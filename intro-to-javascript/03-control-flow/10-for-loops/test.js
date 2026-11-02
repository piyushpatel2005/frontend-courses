test("Step 1: Sums", () => {
  assert.match(OUTPUT, /^Sums:\ 2,15,10,0$/m, "Expected the complete Console line: Sums: 2,15,10,0");
});

test("Step 2: Reversals", () => {
  assert.match(OUTPUT, /^Reversals:\ 3,2,1\ \|\ c,b,a\ \|\ \[\]$/m, "Expected the complete Console line: Reversals: 3,2,1 | c,b,a | []");
});

test("Step 3: Sum", () => {
  assert.match(OUTPUT, /^Sum:\ 15$/m, "Expected the complete Console line: Sum: 15");
});
