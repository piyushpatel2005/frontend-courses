// OFFLINE MOCK: a fetch-shaped function returning a real Response, not live data.
window.mockFetch = async function mockFetch(url) {
  if (url !== "/api/notice") throw new Error("Unknown mock endpoint");
  return new Response(JSON.stringify({ title: "<img> Community meeting" }), {
    status: 200, headers: { "Content-Type": "application/json" }
  });
};

document.querySelector("#load-notice").addEventListener("click", async () => {
  const response = await mockFetch("/api/notice");
  const notice = await response.json();
  document.querySelector("#notice").textContent = notice.title;
});
