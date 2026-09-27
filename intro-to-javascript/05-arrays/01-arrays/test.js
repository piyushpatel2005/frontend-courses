test("colors stores the expected values", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ \["red","green","blue"\]$/m, "Log CHECK 1: [\"red\",\"green\",\"blue\"] as a separate checkpoint line");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^red\ \|\ blue$/m, "Log the mission result with console.log()");
});
