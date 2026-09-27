test("Step 1: totalPrice: 63", () => {
  assert.match(OUTPUT, /^totalPrice:\ 63$/m, "Log totalPrice: 63 as a complete Console line");
});

test("Step 2: 63", () => {
  assert.match(OUTPUT, /^63$/m, "Log 63 as a complete Console line");
});
