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

window.showAlertLoading = function() {
  document.querySelector("#alert-status").textContent = "Checking alerts…";
};
window.renderAlerts = function(alerts) {
  const list = document.querySelector("#alert-list");
  list.replaceChildren();
  for (const alert of alerts) {
    const item = document.createElement("li");
    item.textContent = alert.title;
    list.append(item);
  }
};
window.showEmptyAlerts = function() {
  document.querySelector("#alert-status").textContent = "No alerts right now.";
};
window.checkAlertResponse = function(response) {
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
};
window.showAlertFailure = function() {
  document.querySelector("#alert-list").replaceChildren();
  document.querySelector("#alert-status").textContent = "Could not load alerts.";
};
window.loadAlerts = async function() {
  document.querySelector("#alert-list").replaceChildren();
  window.showAlertLoading();
  try {
    const mode = document.querySelector("#alert-mode").value;
    const response = await window.mockFetch(`/api/alerts?mode=${encodeURIComponent(mode)}`);
    window.checkAlertResponse(response);
    const alerts = await response.json();
    window.renderAlerts(alerts);
    if (alerts.length === 0) window.showEmptyAlerts();
    else document.querySelector("#alert-status").textContent = "Alerts loaded.";
  } catch (error) {
    window.showAlertFailure();
  }
};
document.querySelector("#check-alerts").addEventListener("click", () => {
  window.lastLoad = window.loadAlerts();
});
