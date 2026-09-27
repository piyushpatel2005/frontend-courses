test("Step 1: admission: 18 (number)", () => {
  assert.match(OUTPUT, /^admission:\ 18\ \(number\)$/m, "Log admission: 18 (number) as a complete Console line");
});

test("Step 2: refreshment: 4 (number)", () => {
  assert.match(OUTPUT, /^refreshment:\ 4\ \(number\)$/m, "Log refreshment: 4 (number) as a complete Console line");
});

test("Step 3: fee: 6 (number)", () => {
  assert.match(OUTPUT, /^fee:\ 6\ \(number\)$/m, "Log fee: 6 (number) as a complete Console line");
});

test("Step 4: per guest: 22", () => {
  assert.match(OUTPUT, /^per\ guest:\ 22$/m, "Log per guest: 22 as a complete Console line");
});

test("Step 5: expense total: 72", () => {
  assert.match(OUTPUT, /^expense\ total:\ 72$/m, "Log expense total: 72 as a complete Console line");
});
