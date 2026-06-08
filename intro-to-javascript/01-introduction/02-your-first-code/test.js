test("starter values are created", () => {
  assert.equal(firstMessage, "Ada", "Set firstMessage to Ada");
  assert.equal(divisionResult, 25, "divisionResult should equal 25");
});

test("#output shows the first code result", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), "Ada | 25", "#output should show the name and division result");
});
