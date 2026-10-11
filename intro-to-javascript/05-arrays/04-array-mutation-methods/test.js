test("Step 1: After push", () => {
  assert.match(OUTPUT, new RegExp("^After\\ push:\\ first,second,third$", "m"), "Step 1: expected After push: first,second,third");
});

test("Step 2: After pop", () => {
  assert.match(OUTPUT, new RegExp("^After\\ pop:\\ first,second\\ \\|\\ third$", "m"), "Step 2: expected After pop: first,second | third");
});

test("Step 3: first,second | third", () => {
  assert.match(OUTPUT, new RegExp("^first,second\\ \\|\\ third$", "m"), "Step 3: expected first,second | third");
});
