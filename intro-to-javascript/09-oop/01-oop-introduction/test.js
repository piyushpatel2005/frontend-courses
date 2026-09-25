test("car stores data and behavior together", () => {
  assert.equal(car.brand, 'Roadster', "car.brand should be Roadster");
  assert.equal(typeof car.accelerate, 'function', "car should have an accelerate method");
  assert.equal(car.speed, 100, "car.speed should be updated after accelerate is called");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "Roadster | 100", "Log the mission result with console.log()");
});
