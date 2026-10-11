test("Step 1: Sword", () => {
  assert.match(OUTPUT, /^Sword:\ Blade\ burst$/m, "Expected the complete Console line: Sword: Blade burst");
});

test("Step 2: Gun", () => {
  assert.match(OUTPUT, /^Gun:\ Pulse\ shot$/m, "Expected the complete Console line: Gun: Pulse shot");
});

test("Step 3: Shield", () => {
  assert.match(OUTPUT, /^Shield:\ Shield\ wall$/m, "Expected the complete Console line: Shield: Shield wall");
});

test("Step 4: Other props", () => {
  assert.match(OUTPUT, /^Other\ props:\ Training\ mode,Training\ mode$/m, "Expected the complete Console line: Other props: Training mode,Training mode");
});
