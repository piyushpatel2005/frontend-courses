test("date parts are read from the fixed date", () => {
  assert.equal(year, 2024, "year should be 2024");
  assert.equal(month, 5, "month should be 5");
  assert.equal(day, 6, "day should be 6");
});

test("#output shows the formatted date", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), '2024-05-06', "#output should show the formatted date");
});
