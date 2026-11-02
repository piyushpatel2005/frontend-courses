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
  const row = document.createElement("li");
  const title = document.createElement("strong");
  title.textContent = item.title;
  const venue = document.createElement("span");
  venue.textContent = ` — ${item.venue}`;
  row.append(title, venue);
  return row;
};
window.render = function(items) {
  list.replaceChildren();
  for (const item of items) list.append(window.makeEventRow(item));
};
window.showEventCount = function(items) {
  status.textContent = `${items.length} entries found.`;
};
window.showDashboardLoading = function() {
  status.textContent = "Loading entries…";
  list.replaceChildren();
};
window.checkDashboardResponse = function(response) {
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
};
window.showDashboardFailure = function() {
  list.replaceChildren();
  status.textContent = "Could not load entries. Try again.";
  retry.hidden = false;
};
window.showDashboardEmpty = function() {
  status.textContent = "No matching entries.";
};
const form = document.querySelector("#search-form");
const search = document.querySelector("#search");
window.requestURL = function() {
  const params = new URLSearchParams();
  const query = search.value.trim();
  if (query) params.set("q", query);
  return params.size ? `${API_URL}?${params}` : API_URL;
};
form.addEventListener("submit", event => {
  event.preventDefault();
  window.lastLoad = window.loadEntries();
});

let controller;
let latestRequest = 0;

window.loadEntries = async function() {
  const request = ++latestRequest;
  // TODO: Step 1: complete the corresponding task here.
  controller = new AbortController();
  window.showDashboardLoading();
  retry.hidden = true;
  try {
    const response = await window.dashboardFetch(window.requestURL(), {signal: controller.signal});
    window.checkDashboardResponse(response);
    const data = await response.json();
    // TODO: Step 2: complete the corresponding task here.
    window.render(data.items);
    if (data.items.length) window.showEventCount(data.items);
    else window.showDashboardEmpty();
  } catch (error) {
    // TODO: Step 3: complete the corresponding task here.
    window.showDashboardFailure();
  }
};
retry.addEventListener("click", () => {window.lastLoad = window.loadEntries();});
window.initialDashboardLoad = window.loadEntries();
