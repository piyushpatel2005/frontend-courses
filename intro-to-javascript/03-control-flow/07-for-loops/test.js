test("Step 1: Sum one: 2", () => {
  assert.match(OUTPUT, /^Sum\ one:\ 2$/m, "Log Sum one: 2 as a complete Console line");
});

test("Step 2: Reverse one: x", () => {
  assert.match(OUTPUT, /^Reverse\ one:\ x$/m, "Log Reverse one: x as a complete Console line");
});

test("Step 3: Sums: 15,10,0", () => {
  assert.match(OUTPUT, /^Sums:\ 15,10,0$/m, "Log Sums: 15,10,0 as a complete Console line");
});

test("Step 4: Reversals: 3,2,1 | c,b,a", () => {
  assert.match(OUTPUT, /^Reversals:\ 3,2,1\ \|\ c,b,a$/m, "Log Reversals: 3,2,1 | c,b,a as a complete Console line");
});

test("Step 5: Sum: 15", () => {
  assert.match(OUTPUT, /^Sum:\ 15$/m, "Log Sum: 15 as a complete Console line");
});
