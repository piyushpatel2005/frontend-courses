test("typing filters case insensitively and clearing restores all", () => {
  const query = document.querySelector("#trail-query");
  const items = [...document.querySelectorAll("#trails li")];
  query.value = "  RIVER  ";
  query.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(items.filter(item => !item.hidden).length, 2, "Both River trails should remain");
  assert.equal(items.find(item => item.textContent.includes("Forest")).hidden, true, "Hide Forest for a River query");
  query.value = "";
  query.dispatchEvent(new Event("input", { bubbles: true }));
  assert.equal(items.every(item => !item.hidden && item.isConnected), true, "Clear search to restore the same connected nodes");
});
test("live count follows zero and multiple matches", () => {
  const query = document.querySelector("#trail-query");
  const count = document.querySelector("#trail-count");
  query.value = "unmapped";
  query.dispatchEvent(new Event("input", { bubbles: true }));
  assert.match(count.textContent, /^0\b/, "Show zero matches");
  query.value = "River";
  query.dispatchEvent(new Event("input", { bubbles: true }));
  assert.match(count.textContent, /^2\b/, "Show two matches");
});
