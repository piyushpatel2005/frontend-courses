// OFFLINE MOCK: delay a fixed response and honor the real AbortSignal shape.
window.mockFetch = function mockFetch(url, options = {}) {
  const name = new URL(url, "https://preview.invalid").searchParams.get("q");
  if (!["North", "South"].includes(name)) return Promise.reject(new Error("Unknown district"));
  const signal = options.signal;
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new DOMException("Canceled", "AbortError"));
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve(new Response(JSON.stringify({ name }), { status: 200 }));
    }, name === "North" ? 75 : 8);
    function onAbort() {
      clearTimeout(timer);
      reject(new DOMException("Canceled", "AbortError"));
    }
    signal?.addEventListener("abort", onAbort, { once: true });
  });
};

let districtController;
async function lookUpDistrict(name) {
  districtController?.abort();
  districtController = new AbortController();
  const signal = districtController.signal;
  document.querySelector("#district-status").textContent = "Loading district…";
  try {
    const response = await mockFetch(`/api/district?q=${encodeURIComponent(name)}`, { signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (signal.aborted) return;
    document.querySelector("#district").textContent = data.name;
    document.querySelector("#district-status").textContent = "District ready.";
  } catch (error) {
    if (error.name !== "AbortError" && !signal.aborted) {
      document.querySelector("#district-status").textContent = "Lookup failed.";
    }
  }
}
document.querySelector("#slow-district").addEventListener("click", () => lookUpDistrict("North"));
document.querySelector("#fast-district").addEventListener("click", () => lookUpDistrict("South"));
