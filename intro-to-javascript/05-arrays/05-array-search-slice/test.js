test("slice selects the middle values", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ \[2,3,4\]$/m, "Log CHECK 1: [2,3,4] as a separate checkpoint line");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^\[2,3,4,10,11\]$/m, "Log the mission result with console.log()");
});
