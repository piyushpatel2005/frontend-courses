// Offline fixture: dashboardFetch never makes a network request.
// For a real deployment, replace dashboardFetch(API_URL, options) with
// fetch("https://your-cors-enabled-api.example/events", options).
// A remote endpoint must explicitly permit the site's origin via CORS.
const API_URL = "/api/events";
window.dashboardFixture = {
  items: [
    { title: "Seed swap", venue: "Library", category: "garden" },
    { title: "Repair cafe", venue: "Hall", category: "skills" },
    { title: "<em>Night walk</em>", venue: "Park", category: "outdoors" }
  ],
  failNext: false,
  delay: 15
};
window.dashboardFetch = async function dashboardFetch(url, options = {}) {
  const data = window.dashboardFixture;
  const items = data.items.map(item => ({ ...item }));
  const shouldFail = data.failNext;
  data.failNext = false;
  const delay = data.delay;
  await new Promise((resolve, reject) => {
    if (options.signal?.aborted) {
      reject(new DOMException("Request cancelled", "AbortError"));
      return;
    }
    const timer = setTimeout(() => {
      options.signal?.removeEventListener("abort", onAbort);
      resolve();
    }, delay);
    function onAbort() {
      clearTimeout(timer);
      reject(new DOMException("Request cancelled", "AbortError"));
    }
    options.signal?.addEventListener("abort", onAbort, { once: true });
  });
  if (shouldFail) return new Response("Unavailable", { status: 503 });
  const params = new URL(url, "https://preview.invalid").searchParams;
  const query = (params.get("q") || "").toLowerCase();
  return new Response(JSON.stringify({
    items: items.filter(item => item.title.toLowerCase().includes(query))
  }), { status: 200, headers: { "Content-Type": "application/json" } });
};

const list = document.querySelector("#entries");
const status = document.querySelector("#status");
const retry = document.querySelector("#retry");

function render(items) {
  list.replaceChildren();
  // TODO: create safe li rows and announce the count or empty state.
}
async function loadEntries() {
  // The request and JSON parsing are setup; complete render(items) first.
  // Then add loading, HTTP/error feedback, and Retry behavior here.
  try {
    const response = await dashboardFetch(API_URL);
    const data = await response.json();
    render(data.items);
  } catch (error) { /* TODO: show failure and reveal Retry */ }
}
retry.addEventListener("click", loadEntries);
window.initialDashboardLoad = loadEntries();
