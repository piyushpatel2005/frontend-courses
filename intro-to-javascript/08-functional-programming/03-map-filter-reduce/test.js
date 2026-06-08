test("engineeringNames has correct names", () => {
  assert.deepEqual(engineeringNames, ["Alice", "Carol", "Eve"],
    "engineeringNames should be ['Alice', 'Carol', 'Eve']");
});

test("avgEngineerSalary is correct", () => {
  assert.equal(avgEngineerSalary, 107667,
    "Average of [95000, 108000, 120000] rounded should be 107667");
});

test("salaryReport has correct entries", () => {
  assert.equal(salaryReport.length, 5, "salaryReport should have 5 entries");
  assert.ok(salaryReport[0].includes("Alice"), "First entry should include Alice");
  assert.ok(salaryReport[0].includes("95"), "First entry should include the salary");
});

test("#output shows the formatted message", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Engineers: Alice,Carol,Eve | Avg salary: $107,667",
    '#output should show "Engineers: Alice,Carol,Eve | Avg salary: $107,667"');
});
