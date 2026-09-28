const settle = () => new Promise(resolve => setTimeout(resolve, 0));
test("both buttons start pending lookups with a loading status", async () => {
  const original = window.mockFetch;
  const releases = [], routes = [];
  window.mockFetch = url => { routes.push(new URL(url, "https://preview.invalid").searchParams.get("route")); return new Promise(resolve => releases.push(resolve)); };
  try {
    document.querySelector("#slow-route").click();
    assert.text(document.querySelector("#route-status"), "Loading route…");
    document.querySelector("#fast-route").click();
    assert.equal(routes.join("|"), "Slow pier|Fast pier");
  } finally {
    releases.forEach((resolve, i) => resolve(new Response(JSON.stringify({ name: routes[i] }), { status: 200 })));
    await settle(); window.mockFetch = original;
  }
});
test("newer lookup aborts the previous signal", async () => {
  const original = window.mockFetch;
  const signals = [], releases = [];
  window.mockFetch = (url, options) => { signals.push(options?.signal); return new Promise(resolve => releases.push(resolve)); };
  try {
    document.querySelector("#slow-route").click();
    document.querySelector("#fast-route").click();
    assert.equal(signals.length, 2);
    assert.equal(Boolean(signals[0]), true);
    assert.equal(signals[0].aborted, true);
    assert.equal(signals[1].aborted, false);
  } finally {
    releases.forEach(resolve => resolve(new Response('{"name":"Fast pier"}', { status: 200 })));
    await settle(); window.mockFetch = original;
  }
});
test("only the newest resolved route paints safely", async () => {
  const original = window.mockFetch;
  const pending = [];
  window.mockFetch = (url, options) => new Promise((resolve, reject) => {
    const signal = options?.signal;
    pending.push({ resolve, signal });
    // This mock intentionally resolves late even after abort: guard stale results after JSON.
  });
  try {
    document.querySelector("#slow-route").click();
    document.querySelector("#fast-route").click();
    assert.equal(pending.length, 2);
    pending[1].resolve(new Response('{"name":"<em>Fast pier</em>"}', { status: 200 }));
    await settle();
    pending[0].resolve(new Response('{"name":"Slow pier"}', { status: 200 }));
    await settle();
    assert.text(document.querySelector("#route-name"), "<em>Fast pier</em>");
    assert.equal(document.querySelector("#route-name").children.length, 0);
    assert.text(document.querySelector("#route-status"), "Route ready.");
  } finally {
    pending.forEach(p => p.resolve(new Response('{"name":"Slow pier"}', { status: 200 })));
    await settle(); window.mockFetch = original;
  }
});
test("old AbortError never overwrites the newer ready status", async () => {
  const original = window.mockFetch;
  const pending = [];
  window.mockFetch = () => new Promise((resolve, reject) => pending.push({ resolve, reject }));
  try {
    document.querySelector("#slow-route").click();
    document.querySelector("#fast-route").click();
    assert.equal(pending.length, 2);
    pending[1].resolve(new Response('{"name":"Fast pier"}', { status: 200 }));
    await settle();
    pending[0].reject(new DOMException("Canceled", "AbortError"));
    await settle();
    assert.text(document.querySelector("#route-name"), "Fast pier");
    assert.text(document.querySelector("#route-status"), "Route ready.");
  } finally {
    pending.forEach(p => p.resolve(new Response('{"name":"Slow pier"}', { status: 200 })));
    await settle(); window.mockFetch = original;
  }
});
