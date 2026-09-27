test("matrixSum totals both grids", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ 45\ \|\ 4$/m, "Log CHECK 1: 45 | 4 as a separate checkpoint line");
});

test("diagonal reads both grids", () => {
  assert.match(OUTPUT, /^CHECK\ 2:\ 1,5,9\ \|\ 4,8$/m, "Log CHECK 2: 1,5,9 | 4,8 as a separate checkpoint line");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^Sum:\ 45\ \|\ Diagonal:\ 1,5,9$/m, "Log the mission result with console.log()");
});
