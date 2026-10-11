test("Three invocations", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK callbacks: run,run,run"), true, "Expected checkpoint: CHECK callbacks: run,run,run");
});

test("Standalone runs", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("run,run,run"), true, "Expected checkpoint: run,run,run");
});
