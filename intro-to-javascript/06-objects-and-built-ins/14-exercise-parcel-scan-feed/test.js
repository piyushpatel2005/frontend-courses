test("parses JSON scan records", () => {
  assert.match(OUTPUT, /^CHECK 1: Dock,T1$/m, "Log CHECK 1 from the parsed sample record");
});
test("counts all zone scans including repeated IDs", () => {
  assert.match(OUTPUT, /^CHECK 2: Dock=2 Gate=1$/m, "Log CHECK 2 from countByZone");
});
test("deduplicates tracking IDs", () => {
  assert.match(OUTPUT, /^CHECK 3: T1,T2$/m, "Log CHECK 3 from uniqueIds");
});
test("combines the scan summary", () => {
  assert.match(OUTPUT, /^CHECK 4: Dock=2 \| unique=2$/m, "Log CHECK 4 from summarizeScans");
});
test("handles an empty feed", () => {
  assert.match(OUTPUT, /^CHECK 5: empty=0\/0$/m, "Log CHECK 5 from an empty scan feed");
});

test("logs the parcel scan summary", () => {
  assert.match(OUTPUT, /^North: 2 \| South: 2 \| unique: 3$/m, "Log counts from the Map and Set on their own line");
});
