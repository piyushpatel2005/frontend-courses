test("intro values are correct", () => {
  assert.equal(introMessage, "JavaScript rocks!", "Set introMessage to the expected text");
  assert.equal(introNumber, 17, "introNumber should equal (5 * 3) + 2");
});

test("#output shows the JavaScript intro summary", () => {
  const out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(), "JavaScript rocks! | 17", "#output should show the combined message and number");
});
