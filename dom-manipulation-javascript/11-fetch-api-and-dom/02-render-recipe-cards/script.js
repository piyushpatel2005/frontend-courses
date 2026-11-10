// OFFLINE MOCK: fixed recipe data; no request leaves this preview.
window.mockFetch = async function mockFetch(url) {
  if (url !== "/api/recipes") throw new Error("Unknown mock endpoint");
  return new Response(JSON.stringify([
    { title: "Lemon rice" },
    { title: "<img src=x> Garden soup" }
  ]), { status: 200, headers: { "Content-Type": "application/json" } });
};

window.makeRecipeItem = function(recipe) {
  // TODO: Step 1: complete the corresponding task here.
};
window.renderRecipes = function(recipes) {
  // TODO: Step 2: complete the corresponding task here.
};
window.readRecipes = async function() {
  // TODO: Step 3: complete the corresponding task here.
  return [];
};
window.showRecipeLoading = function() {
  // TODO: Step 4: complete the corresponding task here.
};
window.showRecipeDone = function() {
  // TODO: Step 5: complete the corresponding task here.
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
