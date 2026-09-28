// OFFLINE MOCK: the query value controls deterministic local catalog matches.
window.mockFetch = async function mockFetch(url) {
  const request = new URL(url, "https://preview.invalid");
  if (request.pathname !== "/api/catalog") throw new Error("Unknown mock endpoint");
  const q = (request.searchParams.get("q") || "").toLowerCase();
  const products = ["Tea & honey <b>special</b>", "Ceramic mug", "Canvas tote"]
    .filter(name => name.toLowerCase().includes(q)).map(name => ({ name }));
  return new Response(JSON.stringify(products), { status: 200 });
};

// TODO: Handle #catalog-form submit without reloading the page.
// Encode q with URLSearchParams, call mockFetch, and safely render matches.
