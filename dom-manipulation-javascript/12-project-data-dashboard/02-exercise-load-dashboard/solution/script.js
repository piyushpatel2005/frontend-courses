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

async function loadEntries() {
  status.textContent = "Loading entries…";
  list.replaceChildren();
  retry.hidden = true;
  try {
    const response = await dashboardFetch(API_URL);
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
