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
async function dashboardFetch(url, options = {}) {
  const data = window.dashboardFixture;
  const items = data.items.map(item => ({ ...item }));
  const shouldFail = data.failNext;
  data.failNext = false;
  const delay = data.delay;
  await new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, delay);
    options.signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Request cancelled", "AbortError"));
    }, { once: true });
  });
  if (shouldFail) return { ok: false, status: 503 };
  const params = new URL(url, location.href).searchParams;
  const query = (params.get("q") || "").toLowerCase();
  return {
    ok: true,
    json: async () => ({ items: items.filter(item => item.title.toLowerCase().includes(query)) })
  };
}

const list = document.querySelector("#entries");
const status = document.querySelector("#status");
const retry = document.querySelector("#retry");

function render(items) {
  list.replaceChildren();
  // TODO: create safe li rows and announce the count or empty state.
}
async function loadEntries() {
  // TODO: loading state, dashboardFetch(API_URL), response.ok/json and error UI.
}
retry.addEventListener("click", loadEntries);
loadEntries();
