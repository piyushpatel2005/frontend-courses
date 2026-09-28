test("Step 1: greeting: Hello, JavaScript!", () => {
  assert.match(OUTPUT, /^greeting:\ Hello,\ JavaScript!$/m, "Log greeting: Hello, JavaScript! as a complete Console line");
});

test("Step 2: initial score: 0", () => {
  assert.match(OUTPUT, /^initial\ score:\ 0$/m, "Log initial score: 0 as a complete Console line");
});

test("Step 3: score: 10", () => {
  assert.match(OUTPUT, /^score:\ 10$/m, "Log score: 10 as a complete Console line");
});

test("Step 4: Hello, JavaScript! Score: 10", () => {
  assert.match(OUTPUT, /^Hello,\ JavaScript!\ Score:\ 10$/m, "Log Hello, JavaScript! Score: 10 as a complete Console line");
});
