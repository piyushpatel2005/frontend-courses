const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

test("loads the fixture into safe event rows and announces a count", async () => {
  window.dashboardFixture.items = [
    { title: "<em>Garden</em>", venue: "Library", category: "garden" },
    { title: "Repair cafe", venue: "Hall", category: "skills" }
  ];
  document.querySelector("#retry").click();
  await wait(45);
  const rows = document.querySelectorAll("#entries li");
  assert.equal(rows.length, 2, "Render two list rows from the fixture");
  assert.equal(rows[0].textContent.includes("<em>Garden</em>"), true, "Keep the title as text");
  assert.equal(rows[0].querySelector("em"), null, "Do not parse fixture titles as HTML");
  assert.equal(rows[0].textContent.includes("Library"), true, "Show the venue");
  assert.equal(document.querySelector("#status").textContent.includes("2"), true, "Announce the count");
});
test("shows loading and error; Retry starts a new request", async () => {
  window.dashboardFixture.failNext = true;
  document.querySelector("#retry").click();
  assert.equal(document.querySelector("#status").textContent.includes("Loading"), true, "Show loading before the request settles");
  await wait(45);
  assert.equal(document.querySelector("#status").textContent.includes("Could not load"), true, "Announce the failure");
  assert.equal(document.querySelector("#retry").hidden, false, "Show Retry after failure");
  document.querySelector("#retry").click();
  await wait(45);
  assert.equal(document.querySelector("#retry").hidden, true, "Hide Retry after recovery");
  assert.equal(document.querySelectorAll("#entries li").length, 2, "Reload the list on Retry");
});
test("announces empty responses without stale rows", async () => {
  window.dashboardFixture.items = [];
  document.querySelector("#retry").click();
  await wait(45);
  assert.equal(document.querySelectorAll("#entries li").length, 0, "Clear old rows");
  assert.equal(document.querySelector("#status").textContent.includes("No matching"), true, "Explain empty results");
});
