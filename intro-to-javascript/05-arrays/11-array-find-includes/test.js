test("Step 1: First above 50", () => {
  assert.match(OUTPUT, new RegExp("^First\\ above\\ 50:\\ 75$", "m"), "Step 1: expected First above 50: 75");
});

test("Step 2: Has forty", () => {
  assert.match(OUTPUT, new RegExp("^Has\\ forty:\\ true$", "m"), "Step 2: expected Has forty: true");
});
