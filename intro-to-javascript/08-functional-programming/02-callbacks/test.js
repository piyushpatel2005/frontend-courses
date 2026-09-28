test("Three callback invocations", () => {
  assert.match(OUTPUT, /^CHECK callbacks: run,run,run$/m, "Expected this standalone Console line: CHECK callbacks: run,run,run");
});

test("Standalone run values", () => {
  assert.match(OUTPUT, /^run,run,run$/m, "Expected this standalone Console line: run,run,run");
});
