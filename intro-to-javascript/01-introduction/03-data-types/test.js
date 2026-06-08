test("data type variables are correct", () => {
  assert.equal(studentName, "Mia", "studentName should be Mia");
  assert.equal(studentAge, 14, "studentAge should be 14");
  assert.equal(isStudent, true, "isStudent should be true");
});

test("#output shows values with their types", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), "Mia:string | 14:number | true:boolean", "Show each value with its type in #output");
});
