const settle = () => new Promise(resolve => setTimeout(resolve, 0));
const submit = value => {
  document.querySelector("#search").value = value;
  const event = new Event("submit", { bubbles: true, cancelable: true });
  document.querySelector("#search-form").dispatchEvent(event);
  return event;
};
test("labelled form prevents navigation and starts a new load", async () => {
  await window.initialDashboardLoad;
  const input = document.querySelector("#search");
  assert.equal(input.labels.length > 0, true);
  const original = window.dashboardFetch;
  let release, started = 0;
  window.dashboardFetch = () => { started++; return new Promise(resolve => { release = resolve; }); };
  try {
    assert.equal(submit("Repair").defaultPrevented, true);
    assert.equal(started, 1);
  } finally {
    if (release) release(new Response('{"items":[]}', { status: 200 }));
    await settle(); window.dashboardFetch = original;
  }
});
test("the actual request URL encodes reserved characters", async () => {
  await window.initialDashboardLoad;
  const original = window.dashboardFetch;
  let requested, release;
  window.dashboardFetch = url => { requested = url; return new Promise(resolve => { release = resolve; }); };
  try {
    submit("  Tea & tools  ");
    assert.equal(new URL(requested, "https://preview.invalid").searchParams.get("q"), "Tea & tools");
    assert.equal(requested.includes("%26"), true);
  } finally {
    if (release) release(new Response('{"items":[]}', { status: 200 }));
    await settle(); window.dashboardFetch = original;
  }
});
// Each check supplies its own response, independent of previous submissions.
const withEvents = async check => {
  const original = window.dashboardFetch;
  window.dashboardFetch = async url => {
    const q = new URL(url, "https://preview.invalid").searchParams.get("q") || "";
    const items = [{ title: "Seed swap", venue: "Library" }, { title: "Repair cafe", venue: "Hall" }]
      .filter(item => item.title.toLowerCase().includes(q.toLowerCase()));
    return new Response(JSON.stringify({ items }), { status: 200 });
  };
  try { await check(); } finally { window.dashboardFetch = original; }
};
test("matching search renders only matching events", async () => {
  await window.initialDashboardLoad;
  await withEvents(async () => {
    submit("Repair"); await settle();
    assert.equal(document.querySelectorAll("#entries li").length, 1);
    assert.equal(document.querySelector("#entries").textContent.includes("Repair cafe"), true);
  });
});
test("missing search clears earlier rows and reports no matches", async () => {
  await window.initialDashboardLoad;
  await withEvents(async () => {
    document.querySelector("#entries").innerHTML = "<li>Old event</li>";
    submit("missing"); await settle();
    assert.equal(document.querySelectorAll("#entries li").length, 0);
    assert.equal(document.querySelector("#status").textContent.includes("No matching"), true);
  });
});
test("blank query restores the full event list", async () => {
  await window.initialDashboardLoad;
  await withEvents(async () => {
    submit("  "); await settle();
    assert.equal(document.querySelectorAll("#entries li").length, 2);
  });
});
