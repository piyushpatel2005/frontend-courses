test("getDayType is defined", () => {
  assert.equal(typeof getDayType, "function", "Define a function named getDayType");
});

test("getDayType identifies weekends", () => {
  assert.equal(getDayType("Saturday"), "Weekend", "Saturday should return 'Weekend'");
  assert.equal(getDayType("Sunday"), "Weekend", "Sunday should return 'Weekend'");
});

test("getDayType identifies weekdays", () => {
  assert.equal(getDayType("Monday"), "Weekday", "Monday should return 'Weekday'");
  assert.equal(getDayType("Wednesday"), "Weekday", "Wednesday should return 'Weekday'");
  assert.equal(getDayType("Friday"), "Weekday", "Friday should return 'Weekday'");
});

test("getDayType returns Unknown for invalid input", () => {
  assert.equal(getDayType("Holiday"), "Unknown", "Invalid day name should return 'Unknown'");
});

test("#output shows Saturday: Weekend", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "Saturday: Weekend", '#output should show "Saturday: Weekend"');
});
