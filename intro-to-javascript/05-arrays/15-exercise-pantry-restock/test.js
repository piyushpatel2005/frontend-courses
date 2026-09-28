test("filters stock below the target", () => {
  assert.match(OUTPUT, /^CHECK 1: Tea,Napkins$/m, "Log CHECK 1 from lowStock(pantry, 6)");
});
test("sorts low stock", () => {
  assert.match(OUTPUT, /^CHECK 2: Low,Medium$/m, "Log CHECK 2 from the sorted probe");
});
test("extracts names in priority order", () => {
  assert.match(OUTPUT, /^CHECK 3: Low,Medium$/m, "Log CHECK 3 from refillNames(ordered)");
});
test("totals the missing units", () => {
  assert.match(OUTPUT, /^CHECK 4: 4$/m, "Log CHECK 4 from missingUnits(ordered, 4)");
});
test("combines helpers into a refill plan", () => {
  assert.match(OUTPUT, /^CHECK 5: Low,Medium \| 4$/m, "Log CHECK 5 from planRefills on the probe pairs");
});
test("handles full stock", () => {
  assert.match(OUTPUT, /^CHECK 6: \[\[\],0\]$/m, "Log CHECK 6 from a fully stocked pair");
});
test("preserves the order of the input", () => {
  assert.match(OUTPUT, /^CHECK 7: unchanged:true$/m, "Log CHECK 7 after comparing the input before and after planning");
});

test("logs the pantry restock plan", () => {
  assert.match(OUTPUT, /^Tea, Napkins \| 6$/m, "Log the pantry plan on its own line");
});
