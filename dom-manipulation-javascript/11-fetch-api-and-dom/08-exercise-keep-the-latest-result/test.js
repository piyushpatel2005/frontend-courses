test("A newer click aborts the previous fetch signal", async () => {
  window.mockRequests.length = 0;
  document.querySelector("#slow-route").click();
  assert.text(document.querySelector("#route-status"), "Loading route…");
  document.querySelector("#fast-route").click();
  assert.equal(window.mockRequests.length, 2, "Both route buttons should request data");
  assert.exists(window.mockRequests[0].signal, "Pass an AbortSignal in the options object");
  assert.equal(window.mockRequests[0].signal.aborted, true, "Abort the old request on the second click");
  await new Promise(resolve => setTimeout(resolve, 90));
});
test("Only the latest route paints the page; abort is not an error", async () => {
  document.querySelector("#slow-route").click();
  document.querySelector("#fast-route").click();
  await new Promise(resolve => setTimeout(resolve, 95));
  assert.text(document.querySelector("#route-name"), "Fast pier");
  assert.text(document.querySelector("#route-status"), "Route ready.");
});
