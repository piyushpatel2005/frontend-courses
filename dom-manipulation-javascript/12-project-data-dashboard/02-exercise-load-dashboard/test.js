const $ = selector => document.querySelector(selector);
const response = data => new Response(JSON.stringify(data), {status: 200});
const gate = () => { let resolve, reject; const promise = new Promise((yes, no) => {resolve=yes; reject=no;}); return {promise, resolve, reject}; };
test("build a detached safe event row", async () => {
  await window.initialDashboardLoad;
  const row=window.makeEventRow({title:"<img src=x>",venue:"<b>Hall</b>"});
  assert.equal(row.tagName,"LI"); assert.equal(row.parentNode,null);
  assert.text(row.querySelector("strong"),"<img src=x>");
  assert.text(row.querySelector("span"),"— <b>Hall</b>");
  assert.equal(row.querySelectorAll("img,b").length,0);
});
test("replace dashboard rows", async () => {
  await window.initialDashboardLoad; $("#entries").innerHTML="<li>Old</li>";
  window.render([{title:"One",venue:"A"},{title:"Two",venue:"B"}]);
  assert.equal($("#entries").children.length,2);
  assert.text($("#entries strong"),"One");
  window.render([]); assert.equal($("#entries").children.length,0);
});
test("announce a count for a nonempty result", async () => {
  await window.initialDashboardLoad;
  window.showEventCount([{}, {}, {}, {}]); assert.text($("#status"),"4 entries found.");
});
test("show loading and clear outdated results while pending", async () => {
  await window.initialDashboardLoad;
  const original=window.dashboardFetch,g=gate();let work;
  window.dashboardFetch=()=>g.promise;
  try {
    $("#entries").innerHTML="<li>Old</li>"; work=window.loadEntries();
    assert.text($("#status"),"Loading entries…"); assert.equal($("#entries").children.length,0);
  } finally {g.resolve(response({items:[]})); if(work) await work; window.dashboardFetch=original;}
});
test("reject a failed HTTP status even with valid JSON", async () => {
  await window.initialDashboardLoad; window.checkDashboardResponse(response({items:[]}));
  let thrown=false;
  try {window.checkDashboardResponse(new Response('{"items":[]}',{status:503}));} catch(error){thrown=true;}
  assert.equal(thrown,true);
});
test("failure offers a working Retry without stale rows", async () => {
  await window.initialDashboardLoad;
  const original=window.dashboardFetch;let calls=0;
  window.dashboardFetch=async()=>{calls++; if(calls===1) throw new TypeError("Offline"); return response({items:[]});};
  try {
    $("#entries").innerHTML="<li>Old</li>";
    await window.loadEntries(); assert.equal($("#entries").children.length,0);
    assert.text($("#status"),"Could not load entries. Try again."); assert.equal($("#retry").hidden,false);
    $("#retry").click(); await window.lastLoad;
    assert.equal(calls,2); assert.equal($("#retry").hidden,true);
  } finally {window.dashboardFetch=original;}
});
test("announce a successful empty result", async () => {
  await window.initialDashboardLoad;
  $("#status").textContent="Before"; window.showDashboardEmpty();
  assert.text($("#status"),"No matching entries.");
});
