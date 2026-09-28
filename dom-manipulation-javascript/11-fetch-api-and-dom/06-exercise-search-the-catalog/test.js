const submit = value => {
  document.querySelector("#catalog-query").value = value;
  const event = new Event("submit", { bubbles: true, cancelable: true });
  document.querySelector("#catalog-form").dispatchEvent(event);
  return event;
};
const settle = () => new Promise(resolve => setTimeout(resolve, 0));
test("submit prevents browser navigation", async () => {
  assert.equal(submit("tea").defaultPrevented, true);
  await settle(); // Finish this submission before the next test replaces mockFetch.
});
test("trimmed q is encoded in the request and displayed", async () => {
  const original = window.mockFetch;
  let requested, release;
  window.mockFetch = url => { requested = url; return new Promise(resolve => { release = resolve; }); };
  try {
    submit("  tea & honey  ");
    assert.equal(new URL(requested, "https://preview.invalid").pathname, "/api/catalog");
    assert.equal(new URL(requested, "https://preview.invalid").searchParams.get("q"), "tea & honey");
    assert.includes(requested, "%26");
    assert.equal(document.querySelector("#request-url").textContent, requested);
  } finally {
    if (release) release(new Response("[]", { status: 200 }));
    await settle(); window.mockFetch = original;
  }
});
test("matches replace previous rows with literal text", async () => {
  document.querySelector("#results").innerHTML = "<li>Old result</li>";
  submit("tea & honey"); await settle();
  const items = document.querySelectorAll("#results > li");
  assert.equal(items.length, 1);
  assert.text(items[0], "Tea & honey <b>special</b>");
  assert.equal(items[0].children.length, 0);
});
test("unmatched search reports empty state", async () => {
  document.querySelector("#results").innerHTML = "<li>Old result</li>";
  submit("unlisted"); await settle();
  assert.equal(document.querySelectorAll("#results li").length, 0);
  assert.text(document.querySelector("#search-status"), "No matches.");
});
