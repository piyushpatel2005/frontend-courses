// OFFLINE MOCK: fixed recipe data; no request leaves this preview.
window.mockFetch = async function mockFetch(url) {
  if (url !== "/api/recipes") throw new Error("Unknown mock endpoint");
  return new Response(JSON.stringify([
    { title: "Lemon rice" },
    { title: "<img src=x> Garden soup" }
  ]), { status: 200, headers: { "Content-Type": "application/json" } });
};

document.querySelector("#load-recipes").addEventListener("click", async () => {
  const status = document.querySelector("#recipe-status");
  const list = document.querySelector("#recipe-list");
  status.textContent = "Loading recipes…";
  const response = await mockFetch("/api/recipes");
  const recipes = await response.json();
  list.replaceChildren();
  for (const recipe of recipes) {
    const item = document.createElement("li");
    item.textContent = recipe.title;
    list.append(item);
  }
  status.textContent = "Recipes loaded.";
});
