const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const submit = () => {
  const event = new Event("submit", { bubbles: true, cancelable: true });
  document.querySelector("#search-form").dispatchEvent(event);
  return event;
};
test("search has a label and submits without navigation", async () => {
  const input = document.querySelector("#search");
  assert.exists(input, "Keep the search input");
  assert.equal(input.labels.length > 0, true, "Label the search field");
  input.value = "Repair";
  const event = submit();
  assert.equal(event.defaultPrevented, true, "Prevent browser form navigation");
  await wait(45);
  assert.equal(document.querySelectorAll("#entries li").length, 1, "Submit should start a new search");
});
test("encodes reserved characters in a query parameter", async () => {
  window.dashboardFixture.items = [{ title: "Tea & tools", venue: "Studio", category: "skills" }];
  document.querySelector("#search").value = "Tea & tools";
  submit();
  await wait(45);
  assert.equal(document.querySelectorAll("#entries li").length, 1, "URLSearchParams should preserve ampersands in q");
  assert.equal(document.querySelector("#entries").textContent.includes("Tea & tools"), true, "Show the matched title");
});
test("filters, reports no matches, and resets on empty query", async () => {
  window.dashboardFixture.items = [
    { title: "Seed swap", venue: "Library", category: "garden" },
    { title: "Repair cafe", venue: "Hall", category: "skills" }
  ];
  const input = document.querySelector("#search");
  input.value = "missing";
  submit();
  await wait(45);
  assert.equal(document.querySelectorAll("#entries li").length, 0, "Do not show nonmatching rows");
  assert.equal(document.querySelector("#status").textContent.includes("No matching"), true, "Announce no matches");
  input.value = "  ";
  submit();
  await wait(45);
  assert.equal(document.querySelectorAll("#entries li").length, 2, "Blank query should restore the full list");
});
