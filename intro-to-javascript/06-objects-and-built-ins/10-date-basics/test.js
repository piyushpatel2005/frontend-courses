test("date parts are read from the fixed date", () => {
  assert.match(OUTPUT, /(?:^|\n)Parts: 2024,5,6(?:\n|$)/, "Log the UTC date parts on a Parts line");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^2024\-05\-06$/m, "Log the mission result with console.log()");
});
