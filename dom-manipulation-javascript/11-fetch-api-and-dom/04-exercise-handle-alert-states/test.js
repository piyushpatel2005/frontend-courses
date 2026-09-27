test("Click starts an asynchronous alert check", () => {
  document.querySelector("#alert-mode").value = "alerts";
  document.querySelector("#check-alerts").click();
  assert.text(document.querySelector("#alert-status"), "Checking alerts…");
});
test("Success safely renders alerts and empty success is distinct", async () => {
  const mode = document.querySelector("#alert-mode");
  const button = document.querySelector("#check-alerts");
  mode.value = "alerts"; button.click();
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.text(document.querySelector("#alert-list > li"), "Boardwalk closed <until noon>");
  assert.equal(document.querySelectorAll("#alert-list li *").length, 0, "Render the title as text");
  mode.value = "empty"; button.click();
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(document.querySelectorAll("#alert-list li").length, 0, "Clear old alerts");
  assert.text(document.querySelector("#alert-status"), "No alerts right now.");
});
test("HTTP errors and rejected requests show an error and clear old data", async () => {
  const mode = document.querySelector("#alert-mode");
  const button = document.querySelector("#check-alerts");
  for (const failure of ["http", "offline"]) {
    mode.value = "alerts"; button.click();
    await new Promise(resolve => setTimeout(resolve, 0));
    mode.value = failure; button.click();
    await new Promise(resolve => setTimeout(resolve, 0));
    assert.text(document.querySelector("#alert-status"), "Could not load alerts.");
    assert.equal(document.querySelectorAll("#alert-list li").length, 0, "Clear stale alerts on failure");
  }
});
