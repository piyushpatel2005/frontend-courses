test("Step 1: Squares", () => {
  assert.match(OUTPUT, new RegExp("^Squares:\\ 25,9,0$", "m"), "Step 1: expected Squares: 25,9,0");
});

test("Step 2: Celsius", () => {
  assert.match(OUTPUT, new RegExp("^Celsius:\\ 0,36\\.7,100,\\-40$", "m"), "Step 2: expected Celsius: 0,36.7,100,-40");
});

test("Step 3: Parity", () => {
  assert.match(OUTPUT, new RegExp("^Parity:\\ true,true,false,true$", "m"), "Step 3: expected Parity: true,true,false,true");
});

test("Step 4: 5\u00b2 = 25 | 98\u00b0F = 36.7\u00b0C | 4 is even", () => {
  assert.match(OUTPUT, new RegExp("^5\u00b2\\ =\\ 25\\ \\|\\ 98\u00b0F\\ =\\ 36\\.7\u00b0C\\ \\|\\ 4\\ is\\ even:\\ true$", "m"), "Step 4: expected 5\u00b2 = 25 | 98\u00b0F = 36.7\u00b0C | 4 is even: true");
});
