test("Reports the original href", () => {
  const destination = document.querySelector("#destination");
  assert.exists(destination, "Keep #destination");
  assert.equal(destination.textContent.trim(), "Previous destination: #", "Read href before updating it");
});
test("Sets the link destination and accessible name", () => {
  const link = document.querySelector("#club-link");
  assert.exists(link, "Keep #club-link");
  assert.equal(link.getAttribute("href"), "https://example.org/reading-club", "Set the specified href");
  assert.equal(link.getAttribute("aria-label"), "View the reading club schedule", "Give the link a clear accessible name");
  assert.equal(link.textContent.trim(), "Reading club schedule", "Keep the descriptive visible label");
});
test("Removes the draft marker", () => {
  const link = document.querySelector("#club-link");
  assert.exists(link, "Keep #club-link");
  assert.equal(link.hasAttribute("data-draft"), false, "Remove data-draft entirely");
});
