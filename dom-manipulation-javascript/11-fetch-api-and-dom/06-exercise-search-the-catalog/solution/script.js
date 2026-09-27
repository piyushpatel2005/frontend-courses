// OFFLINE MOCK: the query value controls deterministic local catalog matches.
window.mockFetch = async function mockFetch(url) {
  const request = new URL(url, "https://preview.invalid");
  if (request.pathname !== "/api/catalog") throw new Error("Unknown mock endpoint");
  const q = (request.searchParams.get("q") || "").toLowerCase();
  const products = ["Tea & honey <b>special</b>", "Ceramic mug", "Canvas tote"]
    .filter(name => name.toLowerCase().includes(q)).map(name => ({ name }));
  return new Response(JSON.stringify(products), { status: 200 });
};

document.querySelector("#catalog-form").addEventListener("submit", async event => {
  event.preventDefault();
  const term = document.querySelector("#catalog-query").value.trim();
  const url = `/api/catalog?${new URLSearchParams({ q: term })}`;
  document.querySelector("#request-url").textContent = url;
  const response = await mockFetch(url);
  const products = await response.json();
  const list = document.querySelector("#results");
  list.replaceChildren();
  for (const product of products) {
    const item = document.createElement("li");
    item.textContent = product.name;
    list.append(item);
  }
  document.querySelector("#search-status").textContent = products.length ? "Matches found." : "No matches.";
});
