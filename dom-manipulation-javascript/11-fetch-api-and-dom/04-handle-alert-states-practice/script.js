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
  // TODO: Step 1: complete the corresponding task here.
};
window.renderAlerts = function(alerts) {
  const list = document.querySelector("#alert-list");
  list.replaceChildren();
  // TODO: Step 2: complete the corresponding task here.
};
window.showEmptyAlerts = function() {
  // TODO: Step 3: complete the corresponding task here.
};
window.checkAlertResponse = function(response) {
  // TODO: Step 4: complete the corresponding task here.
};
window.showAlertFailure = function() {
  // TODO: Step 5: complete the corresponding task here.
};
window.loadAlerts = async function() {
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
