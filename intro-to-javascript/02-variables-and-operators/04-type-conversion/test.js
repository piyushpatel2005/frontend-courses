test("Step 1: priceStr: 29 (string)", () => {
  assert.match(OUTPUT, /^priceStr:\ 29\ \(string\)$/m, "Log priceStr: 29 (string) as a complete Console line");
});

test("Step 2: price: 29 (number)", () => {
  assert.match(OUTPUT, /^price:\ 29\ \(number\)$/m, "Log price: 29 (number) as a complete Console line");
});

test("Step 3: quantity: 3", () => {
  assert.match(OUTPUT, /^quantity:\ 3$/m, "Log quantity: 3 as a complete Console line");
});

test("Step 4: total: 87 (number)", () => {
  assert.match(OUTPUT, /^total:\ 87\ \(number\)$/m, "Log total: 87 (number) as a complete Console line");
});

test("Step 5: Total: $87", () => {
  assert.match(OUTPUT, /^Total:\ \$87$/m, "Log Total: $87 as a complete Console line");
});
