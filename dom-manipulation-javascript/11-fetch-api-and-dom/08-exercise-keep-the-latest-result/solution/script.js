// OFFLINE MOCK: records the signal and returns predictable timed route data.
window.mockRequests = [];
window.mockFetch = function mockFetch(url, options = {}) {
  const route = new URL(url, "https://preview.invalid").searchParams.get("route");
  if (!["Slow pier", "Fast pier"].includes(route)) return Promise.reject(new Error("Unknown route"));
  const signal = options.signal;
  window.mockRequests.push({ route, signal });
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new DOMException("Canceled", "AbortError"));
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve(new Response(JSON.stringify({ name: route }), { status: 200 }));
    }, route === "Slow pier" ? 75 : 8);
    function onAbort() {
      clearTimeout(timer);
      reject(new DOMException("Canceled", "AbortError"));
    }
    signal?.addEventListener("abort", onAbort, { once: true });
  });
};

let routeController;
async function lookUpRoute(route) {
  routeController?.abort();
  routeController = new AbortController();
  const signal = routeController.signal;
  document.querySelector("#route-status").textContent = "Loading route…";
  try {
    const response = await mockFetch(`/api/routes?route=${encodeURIComponent(route)}`, { signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (signal.aborted) return;
    document.querySelector("#route-name").textContent = data.name;
    document.querySelector("#route-status").textContent = "Route ready.";
  } catch (error) {
    if (error.name !== "AbortError" && !signal.aborted) {
      document.querySelector("#route-status").textContent = "Lookup failed.";
    }
  }
}
document.querySelector("#slow-route").addEventListener("click", () => lookUpRoute("Slow pier"));
document.querySelector("#fast-route").addEventListener("click", () => lookUpRoute("Fast pier"));
