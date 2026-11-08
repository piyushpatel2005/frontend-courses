test("Step 1: Successive", () => {
  assert.match(OUTPUT, new RegExp("^Successive:\\ 17,10,0$", "m"), "Step 1: expected Successive: 17,10,0");
});

test("Step 2: Overdraw", () => {
  assert.match(OUTPUT, new RegExp("^Overdraw:\\ null,6,0,null$", "m"), "Step 2: expected Overdraw: null,6,0,null");
});

test("Step 3: Independent", () => {
  assert.match(OUTPUT, new RegExp("^Independent:\\ 8,19$", "m"), "Step 3: expected Independent: 8,19");
});
