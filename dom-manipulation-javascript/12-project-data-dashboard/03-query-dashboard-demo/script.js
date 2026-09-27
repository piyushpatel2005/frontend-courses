// Offline fixture: dashboardFetch never makes a network request.
// For a real deployment, replace dashboardFetch(API_URL, options) with
// fetch("https://your-cors-enabled-api.example/events", options).
// A remote endpoint must explicitly permit the site's origin via CORS.
const API_URL = "/api/events";
window.dashboardFixture = {
  items: [
    { title: "Cedar loop", venue: "North gate", category: "garden" },
    { title: "River lookout", venue: "East path", category: "skills" },
    { title: "<em>Ridge trail</em>", venue: "Trailhead", category: "outdoors" }
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
}

const list = document.querySelector("#entries");
const status = document.querySelector("#status");
const retry = document.querySelector("#retry");

function render(items) {
  list.replaceChildren();
  for (const item of items) {
    const row = document.createElement("li");
    const title = document.createElement("strong");
    title.textContent = item.title;
    const venue = document.createElement("span");
    venue.textContent = ` — ${item.venue}`;
    row.append(title, venue);
    list.append(row);
  }
  status.textContent = items.length ? `${items.length} entries found.` : "No matching entries.";
}

const form = document.querySelector("#search-form");
const search = document.querySelector("#search");
function requestURL() {
  const params = new URLSearchParams();
  const query = search.value.trim();
  if (query) params.set("q", query);
  return params.size ? `${API_URL}?${params}` : API_URL;
}
form.addEventListener("submit", event => {
  event.preventDefault();
  loadEntries();
});

async function loadEntries() {
  status.textContent = "Loading entries…";
  list.replaceChildren();
  retry.hidden = true;
  try {
    const response = await dashboardFetch(requestURL());
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    render(data.items);
  } catch (error) {
    status.textContent = "Could not load entries. Try again.";
    retry.hidden = false;
  }
}
retry.addEventListener("click", loadEntries);
loadEntries();
