test("Step 1: Welcome test", () => {
  assert.match(OUTPUT, new RegExp("^Welcome\\ test:\\ Welcome,\\ Maya!\\ \\|\\ Welcome,\\ Luis!$", "m"), "Step 1: expected Welcome test: Welcome, Maya! | Welcome, Luis!");
});

test("Step 2: Welcome, Maya!", () => {
  assert.match(OUTPUT, new RegExp("^Welcome,\\ Maya!$", "m"), "Step 2: expected Welcome, Maya!");
});
