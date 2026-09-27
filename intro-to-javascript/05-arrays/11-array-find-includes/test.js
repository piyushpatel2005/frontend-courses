test("find returns the first large price", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ 75$/m, "Log CHECK 1: 75 as a separate checkpoint line");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^75\ \|\ true$/m, "Log the mission result with console.log()");
});
