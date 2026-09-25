test("fill replaces the expected section", () => {
  assert.deepEqual(filledSeats, ['A', 'X', 'X', 'X', 'E'], "filledSeats should replace the middle section with X");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "[\"A\",\"X\",\"X\",\"X\",\"E\"]", "Log the mission result with console.log()");
});
