test("fill replaces the expected section", () => {
  assert.deepEqual(filledSeats, ['A', 'X', 'X', 'X', 'E'], "filledSeats should replace the middle section with X");
});

test("#output shows the filled array", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), '["A","X","X","X","E"]', "#output should show the filled array as JSON");
});
