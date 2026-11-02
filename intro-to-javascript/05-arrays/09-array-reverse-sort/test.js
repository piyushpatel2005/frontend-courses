test("Step 1: Sorted", () => {
  assert.match(OUTPUT, new RegExp("^Sorted:\\ \\[2,3,4,12\\]\\ \\|\\ Source:\\ \\[3,12,4,2\\]$", "m"), "Step 1: expected Sorted: [2,3,4,12] | Source: [3,12,4,2]");
});

test("Step 2: Reversed", () => {
  assert.match(OUTPUT, new RegExp("^Reversed:\\ \\[12,4,3,2\\]\\ \\|\\ Sorted:\\ \\[2,3,4,12\\]$", "m"), "Step 2: expected Reversed: [12,4,3,2] | Sorted: [2,3,4,12]");
});
