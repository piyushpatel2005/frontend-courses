const $ = selector => document.querySelector(selector);
const response = data => new Response(JSON.stringify(data), {status: 200});
const gate = () => { let resolve, reject; const promise = new Promise((yes, no) => {resolve=yes; reject=no;}); return {promise, resolve, reject}; };
test("build an encoded URL, or the base URL for blank input", async () => {
  await window.initialDashboardLoad;
  for(const value of ["  Tea & tools  ","a+b?c#d"]){
    $("#search").value=value;
    const url=new URL(window.requestURL(),"https://preview.invalid");
    assert.equal(url.pathname,"/api/events"); assert.equal(url.searchParams.get("q"),value.trim());
    assert.equal([...url.searchParams].length,1);
  }
  $("#search").value="  "; assert.equal(window.requestURL(),"/api/events");
});
test("the loader sends the current query to the fixture", async () => {
  await window.initialDashboardLoad;
  const original=window.dashboardFetch;let requested;
  window.dashboardFetch=async url=>{requested=url;return response({items:[]});};
  try {
    $("#search").value="Repair & share"; await window.loadEntries();
    assert.equal(new URL(requested,"https://preview.invalid").searchParams.get("q"),"Repair & share");
  } finally {window.dashboardFetch=original;}
});
test("submit stays on the page and starts a fresh load", async () => {
  await window.initialDashboardLoad;
  const original=window.dashboardFetch,g=gate();let calls=0;
  window.dashboardFetch=()=>{calls++;return g.promise;};
  try {
    const event=new Event("submit",{bubbles:true,cancelable:true});
    $("#search-form").dispatchEvent(event);
    assert.equal(event.defaultPrevented,true); assert.equal(calls,1);
    assert.text($("#status"),"Loading entries…");
  } finally {g.resolve(response({items:[]})); await window.lastLoad; window.dashboardFetch=original;}
});
