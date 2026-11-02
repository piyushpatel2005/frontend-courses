test("The initializer writes safe startup text", () => {
  const status = document.querySelector("#startup-status");
  status.textContent = "Waiting";
  showReady();
  assert.text(status, "Reading room ready.");
  assert.equal(status.children.length, 0);
});
test("Startup handles both parsing and already-parsed pages", () => {
  for (const state of ["loading", "interactive", "complete"]) {
    // A native event target with an explicit readiness fixture, not a simulated browser.
    const target = new EventTarget();
    target.readyState = state;
    let calls = 0;
    startPage(target, () => { calls += 1; });
    assert.equal(calls, state === "loading" ? 0 : 1, "Choose the correct timing path");
    target.dispatchEvent(new Event("DOMContentLoaded"));
    target.dispatchEvent(new Event("DOMContentLoaded"));
    assert.equal(calls, 1, "Initialize once on either path");
  }
});
