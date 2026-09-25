test("colors stores the expected values", () => {
  assert.deepEqual(colors, ['red', 'green', 'blue'], "Create the colors array in the expected order");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "red | blue", "Log the mission result with console.log()");
});
