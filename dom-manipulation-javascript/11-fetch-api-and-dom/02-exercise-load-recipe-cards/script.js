// OFFLINE MOCK: fixed recipe data; no request leaves this preview.
window.mockFetch = async function mockFetch(url) {
  if (url !== "/api/recipes") throw new Error("Unknown mock endpoint");
  return new Response(JSON.stringify([
    { title: "Lemon rice" },
    { title: "<img src=x> Garden soup" }
  ]), { status: 200, headers: { "Content-Type": "application/json" } });
};

// TODO: Attach a click handler to #load-recipes. Start with the loading message.
// Then await mockFetch("/api/recipes") and response.json(), and safely render the list.
