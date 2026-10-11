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
  return `/api/catalog?${new URLSearchParams({ q: term.trim() })}`;
};
window.showCatalogURL = function(url) {
  document.querySelector("#request-url").textContent = url;
};
window.renderProducts = function(products) {
  const list = document.querySelector("#results");
  list.replaceChildren();
  for (const product of products) {
    const item = document.createElement("li");
    item.textContent = product.name;
    list.append(item);
  }
};
window.showCatalogEmpty = function() {
  document.querySelector("#search-status").textContent = "No matches.";
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
  event.preventDefault();
  window.lastLoad = window.searchCatalog();
});
