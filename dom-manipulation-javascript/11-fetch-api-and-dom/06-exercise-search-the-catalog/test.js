// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
const $ = selector => document.querySelector(selector);
const response = data => new Response(JSON.stringify(data), {status: 200});
const gate = () => { let resolve, reject; const promise = new Promise((yes, no) => {resolve=yes; reject=no;}); return {promise, resolve, reject}; };
test("prevent submit navigation", () => withPreviewLayout(async () => {
  const event=new Event("submit",{bubbles:true,cancelable:true});
  $("#catalog-form").dispatchEvent(event);
  await window.lastLoad;
  assert.equal(event.defaultPrevented,true);
}));
test("encode and trim the q parameter", () => withPreviewLayout(() => {
  for (const term of ["  tea & honey  ", "a+b?c#d", "  "]) {
    const url=new URL(window.catalogURL(term),"https://preview.invalid");
    assert.equal(url.pathname,"/api/catalog"); assert.equal(url.searchParams.get("q"),term.trim());
    assert.equal([...url.searchParams].length,1);
  }
}));
test("display the request URL as literal text", () => withPreviewLayout(() => {
  window.showCatalogURL("/api/catalog?q=<b>test</b>");
  assert.text($("#request-url"),"/api/catalog?q=<b>test</b>");
  assert.equal($("#request-url").children.length,0);
}));
test("replace results with safely rendered product names", () => withPreviewLayout(() => {
  $("#results").innerHTML="<li>Old</li>";
  window.renderProducts([{name:"<b>Changed</b>"},{name:"Cup"}]);
  assert.equal($("#results").children.length,2);
  assert.text($("#results").children[0],"<b>Changed</b>");
  assert.equal($("#results").children[0].children.length,0);
  window.renderProducts([]); assert.equal($("#results").children.length,0);
}));
test("announce no matches", () => withPreviewLayout(() => {
  $("#search-status").textContent="Before";
  window.showCatalogEmpty(); assert.text($("#search-status"),"No matches.");
}));
