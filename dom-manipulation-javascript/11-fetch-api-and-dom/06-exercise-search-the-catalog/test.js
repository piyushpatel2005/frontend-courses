test("Submit encodes a trimmed q parameter without navigating", async () => {
  document.querySelector("#catalog-query").value = "  tea & honey  ";
  document.querySelector("#catalog-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  await new Promise(resolve => setTimeout(resolve, 0));
  const url = document.querySelector("#request-url").textContent;
  assert.equal(new URL(url, "https://preview.invalid").pathname, "/api/catalog");
  assert.equal(new URL(url, "https://preview.invalid").searchParams.get("q"), "tea & honey");
  assert.includes(url, "%26", "Encode the ampersand, not a raw query separator");
});
test("Matching products replace the list and never become HTML", async () => {
  document.querySelector("#catalog-query").value = "tea & honey";
  document.querySelector("#catalog-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  await new Promise(resolve => setTimeout(resolve, 0));
  const items = document.querySelectorAll("#results > li");
  assert.equal(items.length, 1);
  assert.text(items[0], "Tea & honey <b>special</b>");
  assert.equal(items[0].children.length, 0, "Use textContent rather than innerHTML");
});
test("An unmatched search clears previous results", async () => {
  document.querySelector("#catalog-query").value = "unlisted";
  document.querySelector("#catalog-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(document.querySelectorAll("#results li").length, 0);
  assert.text(document.querySelector("#search-status"), "No matches.");
});
