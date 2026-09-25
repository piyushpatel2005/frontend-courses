test("latitude and longitude are destructured correctly", () => {
  assert.equal(latitude, 40.7128, "latitude should be 40.7128");
  assert.equal(longitude, -74.0060, "longitude should be -74.0060");
});

test("name and price are destructured from product", () => {
  assert.equal(name, "Laptop", "name should be 'Laptop'");
  assert.equal(price, 999, "price should be 999");
});

test("swapPair is defined and works", () => {
  assert.equal(typeof swapPair, "function", "Define a function named swapPair");
  assert.deepEqual(swapPair([1, 2]), [2, 1], "swapPair([1, 2]) should return [2, 1]");
  assert.deepEqual(swapPair(["a", "b"]), ["b", "a"], "swapPair should work with strings");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "Laptop costs $999 | lat: 40.7128", "Log the mission result with console.log()");
});
