test("Step 1: Grade 95: A", () => {
  assert.match(OUTPUT, /^Grade\ 95:\ A$/m, "Log Grade 95: A as a complete Console line");
});

test("Step 2: Grade set: A,B,C,D,F", () => {
  assert.match(OUTPUT, /^Grade\ set:\ A,B,C,D,F$/m, "Log Grade set: A,B,C,D,F as a complete Console line");
});

test("Step 3: Grade boundaries: A,B,D", () => {
  assert.match(OUTPUT, /^Grade\ boundaries:\ A,B,D$/m, "Log Grade boundaries: A,B,D as a complete Console line");
});

test("Step 4: Grade: B", () => {
  assert.match(OUTPUT, /^Grade:\ B$/m, "Log Grade: B as a complete Console line");
});
