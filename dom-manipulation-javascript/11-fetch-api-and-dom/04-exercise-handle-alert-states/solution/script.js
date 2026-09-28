// OFFLINE MOCK: deterministic alert scenarios, never live trail conditions.
window.mockFetch = async function mockFetch(url) {
  const mode = new URL(url, "https://preview.invalid").searchParams.get("mode");
  if (mode === "offline") throw new TypeError("Simulated network unavailable");
  if (mode === "http") return new Response("Unavailable", { status: 503 });
  if (mode === "empty") return new Response("[]", { status: 200 });
  if (mode === "alerts") return new Response(JSON.stringify([
    { title: "Boardwalk closed <until noon>" }
  ]), { status: 200 });
  throw new Error("Unknown mock scenario");
};

document.querySelector("#check-alerts").addEventListener("click", async () => {
  const status = document.querySelector("#alert-status");
  const list = document.querySelector("#alert-list");
  status.textContent = "Checking alerts…";
  list.replaceChildren();
  try {
    const mode = document.querySelector("#alert-mode").value;
    const response = await mockFetch(`/api/alerts?mode=${encodeURIComponent(mode)}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const alerts = await response.json();
    status.textContent = alerts.length ? "Alerts loaded." : "No alerts right now.";
    for (const alert of alerts) {
      const item = document.createElement("li");
      item.textContent = alert.title;
      list.append(item);
    }
  } catch (error) {
    status.textContent = "Could not load alerts.";
  }
});
