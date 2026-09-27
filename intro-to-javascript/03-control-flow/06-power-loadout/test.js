test("Step 1: Sword: Blade burst", () => {
  assert.match(OUTPUT, /^Sword:\ Blade\ burst$/m, "Log Sword: Blade burst as a complete Console line");
});

test("Step 2: Loadout: Blade burst,Pulse shot,Shield wall", () => {
  assert.match(OUTPUT, /^Loadout:\ Blade\ burst,Pulse\ shot,Shield\ wall$/m, "Log Loadout: Blade burst,Pulse shot,Shield wall as a complete Console line");
});

test("Step 3: Pencil: Training mode", () => {
  assert.match(OUTPUT, /^Pencil:\ Training\ mode$/m, "Log Pencil: Training mode as a complete Console line");
});

test("Step 4: Shield wall", () => {
  assert.match(OUTPUT, /^Shield\ wall$/m, "Log Shield wall as a complete Console line");
});
