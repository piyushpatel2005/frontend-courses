test("choosePower is defined", () => {
  assert.equal(typeof choosePower, "function", "Define choosePower(item)");
});

test("choosePower handles known items", () => {
  assert.equal(choosePower("sword"), "Blade burst");
  assert.equal(choosePower("gun"), "Pulse shot");
  assert.equal(choosePower("shield"), "Shield wall");
});

test("choosePower has a default", () => {
  assert.equal(choosePower("pencil"), "Training mode");
});

test("logs the shield power", () => {
  assert.includes(OUTPUT, "Shield wall", "Log the shield result");
});
