test("click shows loading while fetch is pending", async () => {
  const original = window.mockFetch;
  let release, requested = false;
  window.mockFetch = url => { requested = url === "/api/recipes"; return new Promise(resolve => { release = resolve; }); };
  try {
    document.querySelector("#load-recipes").click();
    assert.text(document.querySelector("#recipe-status"), "Loading recipes…");
    assert.equal(requested, true);
  } finally {
    if (release) release(new Response("[]", { status: 200 }));
    await new Promise(resolve => setTimeout(resolve, 0));
    window.mockFetch = original;
  }
});
test("JSON titles render as literal text", async () => {
  const original = window.mockFetch;
  let complete;
  window.mockFetch = url => { assert.equal(url, "/api/recipes"); return new Promise(resolve => { complete = resolve; }); };
  try {
    document.querySelector("#load-recipes").click();
    assert.equal(document.querySelectorAll("#recipe-list > li").length, 0, "Wait for the response");
    complete(new Response(JSON.stringify([{title: "Lemon rice"}, {title: "<img src=x> Garden soup"}]), {status: 200}));
    await new Promise(resolve => setTimeout(resolve, 0));
    const items = document.querySelectorAll("#recipe-list > li");
    assert.equal(items.length, 2);
    assert.text(items[0], "Lemon rice");
    assert.text(items[1], "<img src=x> Garden soup");
    assert.equal(document.querySelectorAll("#recipe-list img").length, 0);
  } finally { window.mockFetch = original; }
});
test("status reports completion after rendering", async () => {
  document.querySelector("#load-recipes").click();
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(document.querySelectorAll("#recipe-list > li").length, 2);
  assert.text(document.querySelector("#recipe-status"), "Recipes loaded.");
});
