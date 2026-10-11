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
  // TODO 2
return "/api/catalog";
};
window.showCatalogURL = function(url) {
  // TODO 3

};
window.renderProducts = function(products) {
  // TODO 4

};
window.showCatalogEmpty = function() {
  // TODO 5

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
  // TODO 1

  window.lastLoad = window.searchCatalog();
});
