test("Each pass starts with its own entries", () => {
  assert.match(OUTPUT, /^initial: Mina: 2 entries \| Teo: 1 entries$/m, "Initialize each pass with its own holder and entries");
});

test("Entries stop at zero without changing the other pass", () => {
  assert.match(OUTPUT, /^after use: Mina: 0 entries \| Teo: 1 entries$/m, "Use Mina's entries without changing Teo or going below zero");
});

test("Instances share a prototype method", () => {
  assert.match(OUTPUT, /^shared method: true$/m, "Keep useEntry as a class method, shared between instances");
});
