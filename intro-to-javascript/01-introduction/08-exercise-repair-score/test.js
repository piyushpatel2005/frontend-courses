test("Step 1: subtotal: 15", () => {
  assert.match(OUTPUT, /^subtotal:\ 15$/m, "Log subtotal: 15 as a complete Console line");
});

test("Step 2: final: 30", () => {
  assert.match(OUTPUT, /^final:\ 30$/m, "Log final: 30 as a complete Console line");
});
