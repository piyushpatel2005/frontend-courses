// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
const $ = selector => document.querySelector(selector);
const response = data => new Response(JSON.stringify(data), {status: 200});
const gate = () => { let resolve, reject; const promise = new Promise((yes, no) => {resolve=yes; reject=no;}); return {promise, resolve, reject}; };
test("announce checking before the request settles", () => withPreviewLayout(async () => {
  const original=window.mockFetch, g=gate(); let work;
  window.mockFetch=()=>g.promise;
  try {work=window.loadAlerts(); assert.text($("#alert-status"), "Checking alerts…");}
  finally {g.resolve(response([])); if(work) await work; window.mockFetch=original;}
}));
test("render varied successful alert titles as text", () => withPreviewLayout(() => {
  $("#alert-list").innerHTML="<li>Old</li>";
  window.renderAlerts([{title:"<img src=x> Flooding"},{title:"Bridge open"}]);
  const rows=$("#alert-list").children;
  assert.equal(rows.length,2); assert.text(rows[0],"<img src=x> Flooding");
  assert.text(rows[1],"Bridge open"); assert.equal(rows[0].children.length,0);
}));
test("announce an empty successful result", () => withPreviewLayout(() => {
  $("#alert-status").textContent="Before";
  window.showEmptyAlerts(); assert.text($("#alert-status"),"No alerts right now.");
}));
test("reject HTTP failure before any JSON read", () => withPreviewLayout(() => {
  window.checkAlertResponse(response([]));
  let thrown=false;
  // A valid JSON error body must still fail the status check.
  try {window.checkAlertResponse(new Response("[]",{status:503}));} catch(error) {thrown=true;}
  assert.equal(thrown,true,"Throw when response.ok is false");
}));
test("a network rejection clears old alerts and reports failure", () => withPreviewLayout(async () => {
  const original=window.mockFetch;
  window.mockFetch=async()=>{throw new TypeError("Offline test");};
  try {
    $("#alert-list").innerHTML="<li>Old</li>";
    await window.loadAlerts();
    assert.equal($("#alert-list").children.length,0);
    assert.text($("#alert-status"),"Could not load alerts.");
  } finally {window.mockFetch=original;}
}));
