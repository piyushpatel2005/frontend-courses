test("Math and Date values are correct", () => {
  assert.equal(roundedUp, 5, "roundedUp should be 5");
  assert.equal(launchYear, 2024, "launchYear should be 2024");
});

test("#output shows the Math and Date summary", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), '5 | 2024', "#output should show the rounded value and year");
});
