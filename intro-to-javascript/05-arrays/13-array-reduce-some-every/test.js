test("reduce sums the values", () => {
  assert.match(OUTPUT, /^CHECK 1: 30$/m, "Log CHECK 1 from reduce");
});
test("some finds an adult", () => {
  assert.match(OUTPUT, /^CHECK 2: true$/m, "Log CHECK 2 from some");
});
test("every confirms positive values", () => {
  assert.match(OUTPUT, /^CHECK 3: true$/m, "Log CHECK 3 from every");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^30 \| true \| true$/m, "Log the three results on their own line");
});
