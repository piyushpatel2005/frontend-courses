test("scope example keeps global and local values separate", () => {
  assert.equal(siteName, 'Frontend Lab', "siteName should be the global label");
  assert.equal(buildLabel(), 'Frontend Lab - Variables', "buildLabel should use both the global and local values");
});

test("#output shows the scoped label", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), 'Frontend Lab - Variables', "#output should show the combined label");
});
