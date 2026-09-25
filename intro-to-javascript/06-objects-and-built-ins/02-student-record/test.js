test("student has the required key-value pairs", () => {
  assert.equal(student.name, "Riley", "Set student.name to Riley");
  assert.equal(student.course, "JavaScript", "Set student.course to JavaScript");
  assert.equal(student.score, 92, "Update student.score from 88 to 92");
});

test("student has enrolled status", () => {
  assert.equal(student.status, "enrolled", "Add student.status with the value enrolled");
});

test("logs the updated student record", () => {
  assert.includes(OUTPUT, "Riley | JavaScript | 92 | enrolled", "Log the exact student record summary");
});
