test("Select Engineering", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK engineers: Alice,Carol,Eve"), true, "Expected checkpoint: CHECK engineers: Alice,Carol,Eve");
});

test("Extract names", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK names: Alice,Carol,Eve"), true, "Expected checkpoint: CHECK names: Alice,Carol,Eve");
});

test("Average salaries", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK average: 107667"), true, "Expected checkpoint: CHECK average: 107667");
});

test("Format all salaries", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK report: Alice: $95,000 | Bob: $72,000 | Carol: $108,000 | Dave: $68,000 | Eve: $120,000"), true, "Expected checkpoint: CHECK report: Alice: $95,000 | Bob: $72,000 | Carol: $108,000 | Dave: $68,000 | Eve: $120,000");
});

test("Standalone summary", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("Engineers: Alice,Carol,Eve | Avg salary: $107,667"), true, "Expected checkpoint: Engineers: Alice,Carol,Eve | Avg salary: $107,667");
});
