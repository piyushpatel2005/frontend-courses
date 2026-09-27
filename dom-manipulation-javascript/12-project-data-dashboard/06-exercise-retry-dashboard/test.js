const settle = () => new Promise(resolve => setTimeout(resolve, 0));
const submit = value => {
  document.querySelector("#search").value = value;
  document.querySelector("#search-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
};
test("newer searches abort the previous signal", async () => {
  await window.initialDashboardLoad;
  const original = window.dashboardFetch;
  const signals = [], releases = [];
  window.dashboardFetch = (url, options) => { signals.push(options?.signal); return new Promise(resolve => releases.push(resolve)); };
  try {
    submit("Seed"); submit("Repair");
    assert.equal(signals.length, 2);
    assert.equal(Boolean(signals[0]), true);
    assert.equal(signals[0].aborted, true);
    assert.equal(signals[1].aborted, false);
  } finally {
    releases.forEach(resolve => resolve(new Response('{"items":[]}', { status: 200 })));
    await settle(); window.dashboardFetch = original;
  }
});
test("older late result cannot replace newer result", async () => {
  await window.initialDashboardLoad;
  const original = window.dashboardFetch;
  const pending = [];
  window.dashboardFetch = () => new Promise(resolve => { pending.push(resolve); });
  try {
    submit("Seed"); submit("Repair");
    assert.equal(pending.length, 2);
    pending[1](new Response('{"items":[{"title":"Repair cafe","venue":"Hall"}]}', { status: 200 }));
    await settle();
    pending[0](new Response('{"items":[{"title":"Seed swap","venue":"Library"}]}', { status: 200 }));
    await settle();
    assert.equal(document.querySelectorAll("#entries li").length, 1);
    assert.equal(document.querySelector("#entries").textContent.includes("Repair cafe"), true);
  } finally {
    pending.forEach(resolve => resolve(new Response('{"items":[]}', { status: 200 })));
    await settle(); window.dashboardFetch = original;
  }
});
test("cancelled request rejection does not reveal Retry", async () => {
  await window.initialDashboardLoad;
  const original = window.dashboardFetch;
  const pending = [];
  window.dashboardFetch = (url, options) => new Promise((resolve, reject) => {
    pending.push({ resolve, reject, signal: options?.signal });
    options?.signal?.addEventListener("abort", () => reject(new DOMException("Cancelled", "AbortError")), { once: true });
  });
  try {
    submit("Seed"); submit("Repair");
    assert.equal(pending.length, 2);
    // The earlier request must have a signal, and the new search must cancel it.
    // A missing signal would leave the old Promise pending and falsely pass the UI checks.
    assert.equal(Boolean(pending[0].signal), true);
    assert.equal(pending[0].signal.aborted, true);
    pending[1].resolve(new Response('{"items":[{"title":"Repair cafe","venue":"Hall"}]}', { status: 200 }));
    await settle();
    assert.equal(document.querySelector("#retry").hidden, true);
    assert.equal(document.querySelector("#status").textContent.includes("Could not load"), false);
    assert.equal(document.querySelector("#entries").textContent.includes("Repair cafe"), true);
  } finally {
    pending.forEach(p => p.resolve(new Response('{"items":[]}', { status: 200 })));
    await settle(); window.dashboardFetch = original;
  }
});
