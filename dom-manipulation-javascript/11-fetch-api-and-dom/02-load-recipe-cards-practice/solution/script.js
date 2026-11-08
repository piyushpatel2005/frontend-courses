// OFFLINE MOCK: fixed recipe data; no request leaves this preview.
window.mockFetch = async function mockFetch(url) {
  if (url !== "/api/recipes") throw new Error("Unknown mock endpoint");
  return new Response(JSON.stringify([
    { title: "Lemon rice" },
    { title: "<img src=x> Garden soup" }
  ]), { status: 200, headers: { "Content-Type": "application/json" } });
};

window.makeRecipeItem = function(recipe) {
  const item = document.createElement("li");
  item.textContent = recipe.title;
  return item;
};
window.renderRecipes = function(recipes) {
  const list = document.querySelector("#recipe-list");
  list.replaceChildren();
  for (const recipe of recipes) list.append(window.makeRecipeItem(recipe));
};
window.readRecipes = async function() {
  const response = await window.mockFetch("/api/recipes");
  return await response.json();
};
window.showRecipeLoading = function() {
  document.querySelector("#recipe-status").textContent = "Loading recipes…";
};
window.showRecipeDone = function() {
  document.querySelector("#recipe-status").textContent = "Recipes loaded.";
};
window.loadRecipes = async function() {
  window.showRecipeLoading();
  const recipes = await window.readRecipes();
  window.renderRecipes(recipes);
  window.showRecipeDone();
};
document.querySelector("#load-recipes").addEventListener("click", () => {
  window.lastLoad = window.loadRecipes();
});
