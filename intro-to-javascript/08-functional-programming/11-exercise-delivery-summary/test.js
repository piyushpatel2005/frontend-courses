test("Delivered-only weight and empty input", () => {
  assert.match(OUTPUT, /^CHECK summary: 2 parcels \| 2 kg \| empty: 0 parcels, 0 kg$/m, "Expected this standalone Console line: CHECK summary: 2 parcels | 2 kg | empty: 0 parcels, 0 kg");
});

test("Format summary fields", () => {
  assert.match(OUTPUT, /^CHECK format: Delivered 0 parcels weighing 0 kg$/m, "Expected this standalone Console line: CHECK format: Delivered 0 parcels weighing 0 kg");
});

test("Standalone delivered summary", () => {
  assert.match(OUTPUT, /^Delivered 2 parcels weighing 3\.5 kg$/m, "Expected this standalone Console line: Delivered 2 parcels weighing 3.5 kg");
});
