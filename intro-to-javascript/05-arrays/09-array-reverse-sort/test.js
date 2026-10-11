test("Step 1: Sorted", () => {
  assert.match(OUTPUT, new RegExp("^Sorted:\\ \\[1,2,3,4\\]\\ \\|\\ Source:\\ \\[3,1,4,2\\]$", "m"), "Step 1: expected Sorted: [1,2,3,4] | Source: [3,1,4,2]");
});

test("Step 2: Reversed", () => {
  assert.match(OUTPUT, new RegExp("^Reversed:\\ \\[4,3,2,1\\]\\ \\|\\ Sorted:\\ \\[1,2,3,4\\]$", "m"), "Step 2: expected Reversed: [4,3,2,1] | Sorted: [1,2,3,4]");
});
