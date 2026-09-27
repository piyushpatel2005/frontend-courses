// OFFLINE MOCK: parse the requested URL and filter a fixed seed collection.
window.mockFetch = async function mockFetch(url) {
  const request = new URL(url, "https://preview.invalid");
  if (request.pathname !== "/api/seeds") throw new Error("Unknown mock endpoint");
  const q = (request.searchParams.get("q") || "").toLowerCase();
  const seeds = ["Mint & lime", "Red clover", "Basil"].filter(name => name.toLowerCase().includes(q));
  return new Response(JSON.stringify(seeds), { status: 200 });
};

document.querySelector("#seed-form").addEventListener("submit", async event => {
  event.preventDefault();
  const term = document.querySelector("#seed-query").value.trim();
  const url = `/api/seeds?${new URLSearchParams({ q: term })}`;
  document.querySelector("#seed-url").textContent = url;
  const response = await mockFetch(url);
  const seeds = await response.json();
  const list = document.querySelector("#seed-list");
  list.replaceChildren();
  for (const name of seeds) {
    const item = document.createElement("li");
    item.textContent = name;
    list.append(item);
  }
  document.querySelector("#seed-status").textContent = seeds.length ? "Seeds found." : "No seeds found.";
});
