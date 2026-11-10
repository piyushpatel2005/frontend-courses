test("Step 1: Base fees", () => {
  assert.match(OUTPUT, new RegExp("^Base\\ fees:\\ 4,4,7$", "m"), "Step 1: expected Base fees: 4,4,7");
});

test("Step 2: Regular", () => {
  assert.match(OUTPUT, new RegExp("^Regular:\\ PK\\-1:\\ regular\\ \\$4\\ \\|\\ PK\\-8:\\ regular\\ \\$7$", "m"), "Step 2: expected Regular: PK-1: regular $4 | PK-8: regular $7");
});

test("Step 3: Express", () => {
  assert.match(OUTPUT, new RegExp("^Express:\\ PK\\-7:\\ express\\ \\$10\\ \\|\\ PK\\-2:\\ express\\ \\$7$", "m"), "Step 3: expected Express: PK-7: express $10 | PK-2: express $7");
});

test("Step 4: Regular label", () => {
  assert.match(OUTPUT, new RegExp("^Regular\\ label:\\ PK\\-8:\\ regular\\ \\$7$", "m"), "Step 4: expected Regular label: PK-8: regular $7");
});
