test("makeCounter returns an independent counter function", () => {
  assert.equal(typeof makeCounter, "function", "Define makeCounter as a function");
  const counter = makeCounter();
  assert.equal(counter(), 1, "The first call should return 1");
  assert.equal(counter(), 2, "The second call should return 2");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "1 | 2 | 3", "Log the mission result with console.log()");
});
