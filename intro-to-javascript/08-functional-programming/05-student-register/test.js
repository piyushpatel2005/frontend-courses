test("students contains three records", () => {
  assert.equal(students.length, 3, "Create all three student records");
});

test("activeRegister is defined", () => {
  assert.equal(typeof activeRegister, "function", "Define activeRegister(records)");
});

test("activeRegister filters and maps records", () => {
  assert.deepEqual(activeRegister(students), ["Ari: JavaScript", "Chen: JavaScript"]);
});

test("logs the active register", () => {
  assert.includes(OUTPUT, "Ari: JavaScript | Chen: JavaScript", "Log the joined register");
});
