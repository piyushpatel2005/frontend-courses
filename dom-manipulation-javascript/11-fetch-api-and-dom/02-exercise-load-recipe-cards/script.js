// OFFLINE MOCK: fixed recipe data; no request leaves this preview.
window.mockFetch = async function mockFetch(url) {
  if (url !== "/api/recipes") throw new Error("Unknown mock endpoint");
  return new Response(JSON.stringify([
    { title: "Lemon rice" },
    { title: "<img src=x> Garden soup" }
  ]), { status: 200, headers: { "Content-Type": "application/json" } });
};

window.makeRecipeItem = function(recipe) {
  // TODO 1
return document.createElement("li");
};
window.renderRecipes = function(recipes) {
  // TODO 2

};
window.readRecipes = async function() {
  // TODO 3
return [];
};
window.showRecipeLoading = function() {
  // TODO 4

};
window.showRecipeDone = function() {
  // TODO 5

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
