test("Click immediately announces loading", () => {
  document.querySelector("#load-recipes").click();
  assert.text(document.querySelector("#recipe-status"), "Loading recipes…");
});
test("JSON recipe titles become text-only list items", async () => {
  document.querySelector("#load-recipes").click();
  await new Promise(resolve => setTimeout(resolve, 0));
  const items = document.querySelectorAll("#recipe-list > li");
  assert.equal(items.length, 2, "Create two recipe list items from the mock response");
  assert.text(items[0], "Lemon rice");
  assert.text(items[1], "<img src=x> Garden soup");
  assert.equal(document.querySelectorAll("#recipe-list img").length, 0, "Use textContent, not innerHTML");
  assert.text(document.querySelector("#recipe-status"), "Recipes loaded.");
});
