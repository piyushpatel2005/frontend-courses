test("totalPrice uses arithmetic operators correctly", () => {
  assert.equal(totalPrice, 63, "totalPrice should equal 63");
});

test("#output shows the final total", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), "63", "#output should show 63");
});
