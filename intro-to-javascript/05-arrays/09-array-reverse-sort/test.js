test("sort orders the numbers", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ \[1,2,3,4\]$/m, "Log CHECK 1: [1,2,3,4] as a separate checkpoint line");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^\[1,2,3,4\]\ \|\ \[4,3,2,1\]$/m, "Log the mission result with console.log()");
});
