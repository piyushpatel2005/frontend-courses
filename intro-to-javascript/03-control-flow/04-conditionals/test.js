test("Step 1: A range", () => {
  assert.match(OUTPUT, /^A\ range:\ A,A$/m, "Expected the complete Console line: A range: A,A");
});

test("Step 2: B range", () => {
  assert.match(OUTPUT, /^B\ range:\ B,B$/m, "Expected the complete Console line: B range: B,B");
});

test("Step 3: C range", () => {
  assert.match(OUTPUT, /^C\ range:\ C,C$/m, "Expected the complete Console line: C range: C,C");
});

test("Step 4: D range", () => {
  assert.match(OUTPUT, /^D\ range:\ D,D$/m, "Expected the complete Console line: D range: D,D");
});

test("Step 5: F range", () => {
  assert.match(OUTPUT, /^F\ range:\ F,F$/m, "Expected the complete Console line: F range: F,F");
});
