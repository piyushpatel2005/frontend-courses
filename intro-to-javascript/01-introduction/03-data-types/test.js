test("data type variables are correct", () => {
  assert.equal(studentName, "Mia", "studentName should be Mia");
  assert.equal(studentAge, 14, "studentAge should be 14");
  assert.equal(isStudent, true, "isStudent should be true");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "Mia:string | 14:number | true:boolean", "Log the mission result with console.log()");
});
