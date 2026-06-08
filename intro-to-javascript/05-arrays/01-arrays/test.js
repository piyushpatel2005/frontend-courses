test("colors stores the expected values", () => {
  assert.deepEqual(colors, ['red', 'green', 'blue'], "Create the colors array in the expected order");
});

test("#output shows the first and last colors", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), 'red | blue', "#output should show the first and last color");
});
