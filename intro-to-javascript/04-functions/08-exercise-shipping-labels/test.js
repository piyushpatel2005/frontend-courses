test("Checkpoint 1: Base fees: 4,7", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Base\\ fees:\\ 4,7(?:\\n|$)"), "Log the expected result from your function calls");
});

test("Checkpoint 2: Default label: PK-1: regular $4", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Default\\ label:\\ PK\\-1:\\ regular\\ \\$4(?:\\n|$)"), "Log the expected result from your function calls");
});

test("Checkpoint 3: Express label: PK-7: express $10", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Express\\ label:\\ PK\\-7:\\ express\\ \\$10(?:\\n|$)"), "Log the expected result from your function calls");
});

test("Checkpoint 4: Regular label: PK-8: regular $7", () => {
  assert.match(OUTPUT, new RegExp("(?:^|\\n)Regular\\ label:\\ PK\\-8:\\ regular\\ \\$7(?:\\n|$)"), "Log the expected result from your function calls");
});
