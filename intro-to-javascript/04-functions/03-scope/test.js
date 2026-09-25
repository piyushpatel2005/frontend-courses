test("scope example keeps global and local values separate", () => {
  assert.equal(siteName, 'Frontend Lab', "siteName should be the global label");
  assert.equal(buildLabel(), 'Frontend Lab - Variables', "buildLabel should use both the global and local values");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "Frontend Lab - Variables", "Log the mission result with console.log()");
});
