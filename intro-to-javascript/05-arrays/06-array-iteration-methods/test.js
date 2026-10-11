test("Step 1: Labels", () => {
  assert.match(OUTPUT, new RegExp("^Labels:\\ Number:\\ 1,\\ Number:\\ 2,\\ Number:\\ 3$", "m"), "Step 1: expected Labels: Number: 1, Number: 2, Number: 3");
});

test("Step 2: Doubled", () => {
  assert.match(OUTPUT, new RegExp("^Doubled:\\ \\[2,4,6\\]\\ \\|\\ Source:\\ \\[1,2,3\\]$", "m"), "Step 2: expected Doubled: [2,4,6] | Source: [1,2,3]");
});
