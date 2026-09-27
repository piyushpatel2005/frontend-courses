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

// TODO: On each route click, abort the previous request and start a new one.
// Pass { signal } to mockFetch, render only the newest route, and ignore AbortError.
