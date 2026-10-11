test("Step 1: Site", () => {
  assert.match(OUTPUT, new RegExp("^Site:\\ Frontend\\ Lab$", "m"), "Step 1: expected Site: Frontend Lab");
});

test("Step 2: Label", () => {
  assert.match(OUTPUT, new RegExp("^Label:\\ Frontend\\ Lab\\ \\-\\ Variables$", "m"), "Step 2: expected Label: Frontend Lab - Variables");
});

test("Step 3: Frontend Lab - Variables", () => {
  assert.match(OUTPUT, new RegExp("^Frontend\\ Lab\\ \\-\\ Variables$", "m"), "Step 3: expected Frontend Lab - Variables");
});
