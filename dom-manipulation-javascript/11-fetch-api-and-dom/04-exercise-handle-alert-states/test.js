const settle = () => new Promise(resolve => setTimeout(resolve, 0));
const check = mode => { document.querySelector("#alert-mode").value = mode; document.querySelector("#check-alerts").click(); };
test("click shows loading before response settles", async () => {
  const original = window.mockFetch;
  let release, requested = false;
  window.mockFetch = () => { requested = true; return new Promise(resolve => { release = resolve; }); };
  try {
    check("alerts");
    assert.text(document.querySelector("#alert-status"), "Checking alerts…");
    assert.equal(requested, true);
  } finally {
    if (release) release(new Response("[]", { status: 200 }));
    await settle(); window.mockFetch = original;
  }
});
test("successful JSON renders text-only alerts", async () => {
  check("alerts"); await settle();
  assert.text(document.querySelector("#alert-list > li"), "Boardwalk closed <until noon>");
  assert.equal(document.querySelectorAll("#alert-list li *").length, 0);
});
test("empty success clears old alerts", async () => {
  document.querySelector("#alert-list").innerHTML = "<li>Old alert</li>";
  check("empty"); await settle();
  assert.equal(document.querySelectorAll("#alert-list li").length, 0);
  assert.text(document.querySelector("#alert-status"), "No alerts right now.");
});
test("HTTP failures are checked before JSON", async () => {
  document.querySelector("#alert-list").innerHTML = "<li>Old alert</li>";
  check("http"); await settle();
  assert.equal(document.querySelectorAll("#alert-list li").length, 0);
  assert.text(document.querySelector("#alert-status"), "Could not load alerts.");
});
test("rejected requests clear old alerts", async () => {
  document.querySelector("#alert-list").innerHTML = "<li>Old alert</li>";
  check("offline"); await settle();
  assert.equal(document.querySelectorAll("#alert-list li").length, 0);
  assert.text(document.querySelector("#alert-status"), "Could not load alerts.");
});
