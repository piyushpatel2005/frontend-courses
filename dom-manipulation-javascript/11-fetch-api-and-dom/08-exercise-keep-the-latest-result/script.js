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
window.beginRoute = function() {
  // TODO: Step 2: complete the corresponding task here.
  routeController = new AbortController();
  return routeController.signal;
};
window.showRouteLoading = function() {
  // TODO: Step 1: complete the corresponding task here.
};
window.showRouteResult = function(data, signal) {
  // TODO: Step 3: complete the corresponding task here.
};
window.showRouteError = function(error, signal) {
  // TODO: Step 4: complete the corresponding task here.
  document.querySelector("#route-status").textContent = "Lookup failed.";
};
window.lookUpRoute = async function(route) {
  const signal = window.beginRoute();
  window.showRouteLoading();
  try {
    const response = await window.mockFetch(`/api/routes?route=${encodeURIComponent(route)}`, {signal});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    window.showRouteResult(data, signal);
  } catch (error) {
    window.showRouteError(error, signal);
  }
};
for (const [id, route] of [["slow-route", "Slow pier"], ["fast-route", "Fast pier"]]) {
  document.querySelector(`#${id}`).addEventListener("click", () => {
    window.lastLoad = window.lookUpRoute(route);
  });
}
