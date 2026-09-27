test("firstName and lastName are destructured", () => {
  assert.match(OUTPUT, /^CHECK\ 1:\ Jordan\ \|\ Lee$/m, "Log CHECK 1: Jordan | Lee as a separate checkpoint line");
});

test("fullName returns combined name", () => {
  assert.match(OUTPUT, /^CHECK\ 2:\ Jordan\ Lee$/m, "Log CHECK 2: Jordan Lee as a separate checkpoint line");
});

test("averageScore returns correct average", () => {
  assert.match(OUTPUT, /^CHECK\ 3:\ 87\.8$/m, "Log CHECK 3: 87.8 as a separate checkpoint line");
});

test("logs the mission result", () => {
  assert.match(OUTPUT, /^Jordan\ Lee\ —\ avg:\ 87\.8$/m, "Log the mission result with console.log()");
});
