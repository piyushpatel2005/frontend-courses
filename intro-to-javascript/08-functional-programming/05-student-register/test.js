test("Three student records", () => {
  assert.match(OUTPUT, /^CHECK students: Ari,Bea,Chen \| active: true,false,true$/m, "Expected this standalone Console line: CHECK students: Ari,Bea,Chen | active: true,false,true");
});

test("Active register transformation", () => {
  assert.match(OUTPUT, /^CHECK register: Ari: JavaScript \| Chen: JavaScript$/m, "Expected this standalone Console line: CHECK register: Ari: JavaScript | Chen: JavaScript");
});

test("Standalone student register", () => {
  assert.match(OUTPUT, /^Ari: JavaScript \| Chen: JavaScript$/m, "Expected this standalone Console line: Ari: JavaScript | Chen: JavaScript");
});
