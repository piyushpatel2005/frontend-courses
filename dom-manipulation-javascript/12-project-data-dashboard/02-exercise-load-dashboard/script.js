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

window.makeEventRow = function(item) {
  // TODO: Step 1: complete the corresponding task here.
};
window.render = function(items) {
  // TODO: Step 2: complete the corresponding task here.
};
window.showEventCount = function(items) {
  // TODO: Step 3: complete the corresponding task here.
};
window.showDashboardLoading = function() {
  // TODO: Step 4: complete the corresponding task here.
};
window.checkDashboardResponse = function(response) {
  // TODO: Step 5: complete the corresponding task here.
};
window.showDashboardFailure = function() {
  // TODO: Step 6: complete the corresponding task here.
};
window.showDashboardEmpty = function() {
  // TODO: Step 7: complete the corresponding task here.
};
window.loadEntries = async function() {
  window.showDashboardLoading();
  retry.hidden = true;
  try {
    const response = await window.dashboardFetch(API_URL);
    window.checkDashboardResponse(response);
    const data = await response.json();
    window.render(data.items);
    if (data.items.length) window.showEventCount(data.items);
    else window.showDashboardEmpty();
  } catch (error) {
    window.showDashboardFailure();
  }
};
retry.addEventListener("click", () => {window.lastLoad = window.loadEntries();});
window.initialDashboardLoad = window.loadEntries();
