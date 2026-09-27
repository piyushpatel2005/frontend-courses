const settle = () => new Promise(resolve => setTimeout(resolve, 0));
test("fixture events render safely with a count", async () => {
  await window.initialDashboardLoad;
  const original = window.dashboardFetch;
  let release;
  window.dashboardFetch = () => new Promise(resolve => { release = resolve; });
  try {
    document.querySelector("#retry").click();
    assert.equal(typeof release, "function", "Start a real request");
    release(new Response(JSON.stringify({ items: [
      { title: "<em>Garden</em>", venue: "Library" },
      { title: "Repair cafe", venue: "Hall" }
    ] }), { status: 200 }));
    await settle();
    const rows = document.querySelectorAll("#entries li");
    assert.equal(rows.length, 2);
    assert.equal(rows[0].textContent.includes("<em>Garden</em>"), true);
    assert.equal(rows[0].querySelector("em"), null);
    assert.equal(rows[0].textContent.includes("Library"), true);
    assert.equal(document.querySelector("#status").textContent.includes("2"), true);
  } finally { if (release) release(new Response('{"items":[]}', { status: 200 })); window.dashboardFetch = original; }
});
test("loading appears while a request Promise is pending", async () => {
  await window.initialDashboardLoad;
  const original = window.dashboardFetch;
  let release;
  window.dashboardFetch = () => new Promise(resolve => { release = resolve; });
  try {
    document.querySelector("#retry").click();
    assert.equal(typeof release, "function");
    assert.equal(document.querySelector("#status").textContent, "Loading entries…");
  } finally {
    if (release) release(new Response('{"items":[]}', { status: 200 }));
    await settle(); window.dashboardFetch = original;
  }
});
test("HTTP failure offers Retry and success hides it", async () => {
  await window.initialDashboardLoad;
  const original = window.dashboardFetch;
  const releases = [];
  window.dashboardFetch = () => new Promise(resolve => releases.push(resolve));
  try {
    document.querySelector("#retry").click();
    assert.equal(releases.length, 1);
    releases[0](new Response("Unavailable", { status: 503 }));
    await settle();
    assert.equal(document.querySelector("#status").textContent.includes("Could not load"), true);
    assert.equal(document.querySelector("#retry").hidden, false);
    document.querySelector("#retry").click();
    assert.equal(releases.length, 2);
    releases[1](new Response('{"items":[]}', { status: 200 }));
    await settle();
    assert.equal(document.querySelector("#retry").hidden, true);
  } finally {
    releases.forEach(resolve => resolve(new Response('{"items":[]}', { status: 200 })));
    await settle(); window.dashboardFetch = original;
  }
});
test("empty JSON clears prior rows and announces emptiness", async () => {
  await window.initialDashboardLoad;
  const original = window.dashboardFetch;
  window.dashboardFetch = async () => new Response('{"items":[]}', { status: 200 });
  try {
    document.querySelector("#entries").innerHTML = "<li>Old event</li>";
    document.querySelector("#retry").click(); await settle();
    assert.equal(document.querySelectorAll("#entries li").length, 0);
    assert.equal(document.querySelector("#status").textContent.includes("No matching"), true);
  } finally { window.dashboardFetch = original; }
});
