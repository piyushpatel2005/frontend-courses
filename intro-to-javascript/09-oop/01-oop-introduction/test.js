test("car stores data and behavior together", () => {
  assert.equal(car.brand, 'Roadster', "car.brand should be Roadster");
  assert.equal(typeof car.accelerate, 'function', "car should have an accelerate method");
  assert.equal(car.speed, 100, "car.speed should be updated after accelerate is called");
});

test("#output shows the updated car state", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), 'Roadster | 100', "#output should show the brand and updated speed");
});
