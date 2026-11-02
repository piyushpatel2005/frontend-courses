test("Category counts preserve the source", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Category labels: Garden: 2 | Tools: 1 / empty:0 / unchanged:true"), true);
});
test("Joined category report", () => {
  assert.equal(OUTPUT.split(/\r?\n/).some(line => /^Category totals:\s*$/.test(line)), true, "An empty input keeps the report prefix");
  assert.equal(OUTPUT.split(/\r?\n/).includes("Category totals: Lights: 2 | Sound: 1"), true);
});
