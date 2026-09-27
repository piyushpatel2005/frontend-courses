const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const submit = value => {
  document.querySelector("#search").value = value;
  document.querySelector("#search-form").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
};
test("retries a genuine failure using the current query", async () => {
  window.dashboardFixture.delay = 15;
  window.dashboardFixture.failNext = true;
  submit("Repair");
  await wait(45);
  assert.equal(document.querySelector("#retry").hidden, false, "Show Retry after failure");
  assert.equal(document.querySelector("#status").textContent.includes("Could not load"), true, "Announce failure");
  document.querySelector("#retry").click();
  await wait(45);
  assert.equal(document.querySelector("#retry").hidden, true, "Hide Retry after a successful reload");
  assert.equal(document.querySelectorAll("#entries li").length, 1, "Retry the current search term");
});
test("a later search wins while an earlier request is pending", async () => {
  window.dashboardFixture.delay = 90;
  submit("Seed");
  window.dashboardFixture.delay = 5;
  submit("Repair");
  await wait(120);
  assert.equal(document.querySelectorAll("#entries li").length, 1, "Show only the latest search result");
  assert.equal(document.querySelector("#entries").textContent.includes("Repair cafe"), true, "Keep the newer result");
});
test("cancelled searches do not show a spurious error", async () => {
  const originalFetch = window.dashboardFetch;
  const signals = [];
  window.dashboardFetch = (url, options) => {
    signals.push(options?.signal);
    return originalFetch(url, options);
  };
  try {
    window.dashboardFixture.delay = 90;
    submit("Seed");
    window.dashboardFixture.delay = 5;
    submit("Repair");
    await wait(120);
    assert.equal(Boolean(signals[0]), true, "Pass an AbortController signal to the first request");
    assert.equal(signals[0].aborted, true, "Cancel the previous request on a new search");
    assert.equal(document.querySelector("#retry").hidden, true, "Cancellation should not reveal Retry");
    assert.equal(document.querySelector("#status").textContent.includes("Could not load"), false, "Cancellation is not an error");
  } finally {
    window.dashboardFetch = originalFetch;
  }
});
