test("Step 1: Middle", () => {
  assert.match(OUTPUT, new RegExp("^Middle:\\ \\[2,3,4\\]\\ \\|\\ Source:\\ \\[1,2,3,4,5\\]$", "m"), "Step 1: expected Middle: [2,3,4] | Source: [1,2,3,4,5]");
});

test("Step 2: Combined", () => {
  assert.match(OUTPUT, new RegExp("^Combined:\\ \\[2,3,4,10,11\\]\\ \\|\\ Middle:\\ \\[2,3,4\\]$", "m"), "Step 2: expected Combined: [2,3,4,10,11] | Middle: [2,3,4]");
});
