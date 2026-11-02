// OFFLINE MOCK: the query value controls deterministic local catalog matches.
window.mockFetch = async function mockFetch(url) {
  const request = new URL(url, "https://preview.invalid");
  if (request.pathname !== "/api/catalog") throw new Error("Unknown mock endpoint");
  const q = (request.searchParams.get("q") || "").toLowerCase();
  const products = ["Tea & honey <b>special</b>", "Ceramic mug", "Canvas tote"]
    .filter(name => name.toLowerCase().includes(q)).map(name => ({ name }));
  return new Response(JSON.stringify(products), { status: 200 });
};

window.catalogURL = function(term) {
  // TODO: Step 2: complete the corresponding task here.
  return "/api/catalog";
};
window.showCatalogURL = function(url) {
  // TODO: Step 3: complete the corresponding task here.
};
window.renderProducts = function(products) {
  // TODO: Step 4: complete the corresponding task here.
};
window.showCatalogEmpty = function() {
  // TODO: Step 5: complete the corresponding task here.
};
window.searchCatalog = async function() {
  const url = window.catalogURL(document.querySelector("#catalog-query").value);
  window.showCatalogURL(url);
  const response = await window.mockFetch(url);
  const products = await response.json();
  window.renderProducts(products);
  if (products.length === 0) window.showCatalogEmpty();
  else document.querySelector("#search-status").textContent = "Matches found.";
};
document.querySelector("#catalog-form").addEventListener("submit", event => {
  // TODO: Step 1: complete the corresponding task here.
  window.lastLoad = window.searchCatalog();
});
