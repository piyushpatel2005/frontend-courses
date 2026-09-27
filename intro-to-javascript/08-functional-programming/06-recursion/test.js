test("Recursive power", () => {
  assert.match(OUTPUT, /^CHECK power: 1024,27,1,2$/m, "Expected this standalone Console line: CHECK power: 1024,27,1,2");
});

test("Recursive flatten", () => {
  assert.match(OUTPUT, /^CHECK flatten: 1,2,3,4,5 \| empty: 0$/m, "Expected this standalone Console line: CHECK flatten: 1,2,3,4,5 | empty: 0");
});

test("Standalone recursive results", () => {
  assert.match(OUTPUT, /^2\^10 = 1024 \| flatten: 1,2,3,4,5$/m, "Expected this standalone Console line: 2^10 = 1024 | flatten: 1,2,3,4,5");
});
