test("walking-club title", () => {
  const title = document.head.querySelector("title");
  assert.exists(title, "Add a title in head");
  assert.equal(/walking club/i.test(title.textContent) && /walk/i.test(title.textContent), true, "Name the walking-club walk in the tab");
});

test("mobile viewport", () => {
  const tag = document.head.querySelector('meta[name="viewport"]');
  assert.exists(tag, "Add the viewport meta tag inside head");
  assert.equal(tag.getAttribute("content"), "width=device-width, initial-scale=1.0", "Use device width and initial scale");
});

test("walk description", () => {
  const tag = document.head.querySelector('meta[name="description"]');
  assert.exists(tag, "Add a description inside head");
  assert.equal((tag.getAttribute("content") || "").trim().length > 20, true, "Describe the walk in a complete phrase");
});
