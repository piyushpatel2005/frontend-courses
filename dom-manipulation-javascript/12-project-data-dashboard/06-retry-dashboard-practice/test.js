// Native focus/layout checks need a rendered document, not only parsed markup.
async function withPreviewLayout(check) {
  await new Promise(resolve => requestAnimationFrame(resolve));
  return await check();
}
const $ = selector => document.querySelector(selector);
const response = data => new Response(JSON.stringify(data), {status: 200});
const gate = () => { let resolve, reject; const promise = new Promise((yes, no) => {resolve=yes; reject=no;}); return {promise, resolve, reject}; };
test("each new request aborts the previous signal", () => withPreviewLayout(async () => {
  await window.initialDashboardLoad;
  const original=window.dashboardFetch,pending=[],signals=[]; const work=[];
  window.dashboardFetch=(url,options)=>{const g=gate();pending.push(g);signals.push(options?.signal);return g.promise;};
  try {
    work.push(window.loadEntries(),window.loadEntries());
    assert.equal(signals.length,2); assert.equal(signals[0].aborted,true); assert.equal(signals[1].aborted,false);
  } finally {pending.forEach(g=>g.resolve(response({items:[]})));await Promise.all(work);window.dashboardFetch=original;}
}));
test("a late older result cannot overwrite the newest result", () => withPreviewLayout(async () => {
  await window.initialDashboardLoad;
  const original=window.dashboardFetch,pending=[],work=[];
  window.dashboardFetch=()=>{const g=gate();pending.push(g);return g.promise;};
  try {
    work.push(window.loadEntries(),window.loadEntries());
    pending[1].resolve(response({items:[{title:"<b>Newest</b>",venue:"Hall"}]}));await work[1];
    pending[0].resolve(response({items:[{title:"Old",venue:"Park"}]}));await work[0];
    assert.text($("#entries strong"),"<b>Newest</b>");assert.equal($("#entries b"),null);
    assert.text($("#status"),"1 entries found.");
  } finally {pending.forEach(g=>g.resolve(response({items:[]})));await Promise.all(work);window.dashboardFetch=original;}
}));
test("cancelled and stale errors leave the newer state alone", () => withPreviewLayout(async () => {
  await window.initialDashboardLoad;
  const original=window.dashboardFetch,pending=[],work=[];
  window.dashboardFetch=()=>{const g=gate();pending.push(g);return g.promise;};
  try {
    work.push(window.loadEntries(),window.loadEntries());
    pending[0].reject(new TypeError("Old failure"));await work[0];
    assert.text($("#status"),"Loading entries…");assert.equal($("#retry").hidden,true);
    pending[1].reject(new DOMException("Cancelled","AbortError"));await work[1];
    assert.equal($("#retry").hidden,true);
    work.push(window.loadEntries());pending[2].reject(new TypeError("Current failure"));await work[2];
    assert.text($("#status"),"Could not load entries. Try again.");assert.equal($("#retry").hidden,false);
  } finally {pending.forEach(g=>g.resolve(response({items:[]})));await Promise.all(work);window.dashboardFetch=original;}
}));
