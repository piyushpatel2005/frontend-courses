// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
const $ = selector => document.querySelector(selector);
const response = data => new Response(JSON.stringify(data), {status: 200});
const gate = () => { let resolve, reject; const promise = new Promise((yes, no) => {resolve=yes; reject=no;}); return {promise, resolve, reject}; };
test("prepare one detached recipe item with literal text", () => withPreviewLayout(() => {
  for (const title of ["<img src=x onerror=alert(1)>", "Fresh noodles"]) {
    const item = window.makeRecipeItem({title});
    assert.equal(item.tagName, "LI"); assert.equal(item.parentNode, null);
    assert.equal(item.textContent, title); assert.equal(item.children.length, 0);
  }
}));
test("replace previous rows using the recipe items", () => withPreviewLayout(() => {
  $("#recipe-list").innerHTML = "<li>Old</li>";
  window.renderRecipes([{title:"<b>Soup</b>"}, {title:"Rice"}]);
  const rows = $("#recipe-list").children;
  assert.equal(rows.length, 2); assert.text(rows[0], "<b>Soup</b>");
  assert.text(rows[1], "Rice"); assert.equal(rows[0].children.length, 0);
  window.renderRecipes([]); assert.equal($("#recipe-list").children.length, 0);
}));
test("await the request and parse its JSON array", () => withPreviewLayout(async () => {
  const original = window.mockFetch, g = gate(); let url, finished = false;
  window.mockFetch = value => {url=value; return g.promise;};
  let work;
  try {
    work = window.readRecipes().then(data => {finished=true; return data;});
    await Promise.resolve(); assert.equal(url, "/api/recipes"); assert.equal(finished, false);
    g.resolve(response([{title:"Changed fixture"}]));
    const data = await work; assert.equal(data[0].title, "Changed fixture");
  } finally {g.resolve(response([])); if(work) await work; window.mockFetch=original;}
}));
test("show the loading message", () => withPreviewLayout(() => {
  $("#recipe-status").textContent = "Before";
  window.showRecipeLoading(); assert.text($("#recipe-status"), "Loading recipes…");
}));
test("announce completion", () => withPreviewLayout(() => {
  $("#recipe-status").textContent = "Loading recipes…";
  window.showRecipeDone(); assert.text($("#recipe-status"), "Recipes loaded.");
}));
