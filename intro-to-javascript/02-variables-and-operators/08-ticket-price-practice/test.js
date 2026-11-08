test("Step 1: charged: 29", () => {
  assert.match(OUTPUT, /^charged:\ 29$/m, "Log charged: 29 as a complete Console line");
});

test("Step 2: credited: 26", () => {
  assert.match(OUTPUT, /^credited:\ 26$/m, "Log credited: 26 as a complete Console line");
});

test("Step 3: base: 24", () => {
  assert.match(OUTPUT, /^base:\ 24$/m, "Log base: 24 as a complete Console line");
});

test("Step 4: ticket: 26", () => {
  assert.match(OUTPUT, /^ticket:\ 26$/m, "Log ticket: 26 as a complete Console line");
});
