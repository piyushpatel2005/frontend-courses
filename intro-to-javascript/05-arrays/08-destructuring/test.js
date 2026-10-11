test("Step 1: Coordinates", () => {
  assert.match(OUTPUT, new RegExp("^Coordinates:\\ 40\\.7128\\ \\|\\ \\-74\\.006$", "m"), "Step 1: expected Coordinates: 40.7128 | -74.006");
});

test("Step 2: Stops", () => {
  assert.match(OUTPUT, new RegExp("^Stops:\\ Harbor\\ \\|\\ Library$", "m"), "Step 2: expected Stops: Harbor | Library");
});

test("Step 3: Swaps", () => {
  assert.match(OUTPUT, new RegExp("^Swaps:\\ 2,1\\ \\|\\ b,a$", "m"), "Step 3: expected Swaps: 2,1 | b,a");
});

test("Step 4: Harbor to Library | lat", () => {
  assert.match(OUTPUT, new RegExp("^Harbor\\ to\\ Library\\ \\|\\ lat:\\ 40\\.7128$", "m"), "Step 4: expected Harbor to Library | lat: 40.7128");
});
