test("Step 1: Sums", () => {
  assert.match(OUTPUT, new RegExp("^Sums:\\ 45,6,0$", "m"), "Step 1: expected Sums: 45,6,0");
});

test("Step 2: Diagonals", () => {
  assert.match(OUTPUT, new RegExp("^Diagonals:\\ 1,5,9\\ \\|\\ 4,8\\ \\|\\ \\[\\]$", "m"), "Step 2: expected Diagonals: 1,5,9 | 4,8 | []");
});

test("Step 3: Sum", () => {
  assert.match(OUTPUT, new RegExp("^Sum:\\ 45\\ \\|\\ Diagonal:\\ 1,5,9$", "m"), "Step 3: expected Sum: 45 | Diagonal: 1,5,9");
});
