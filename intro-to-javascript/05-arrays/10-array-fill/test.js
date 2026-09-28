test("fill replaces the expected section", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ \["A","X","X","X","E"\]$/m, "Log CHECK 1: [\"A\",\"X\",\"X\",\"X\",\"E\"] as a separate checkpoint line");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^\["A","X","X","X","E"\]$/m, "Log the filled seats on their own line");
});
