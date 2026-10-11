const $ = selector => document.querySelector(selector);
const response = data => new Response(JSON.stringify(data), {status: 200});
const gate = () => { let resolve, reject; const promise = new Promise((yes, no) => {resolve=yes; reject=no;}); return {promise, resolve, reject}; };
test("loading is visible while each route request is pending", async () => {
  const original=window.mockFetch;
  try {
    for (const id of ["slow-route","fast-route"]) {
      const g=gate(); window.mockFetch=()=>g.promise;
      try {$("#"+id).click(); assert.text($("#route-status"),"Loading route…");}
      finally {g.resolve(response({name:"Test"})); await window.lastLoad;}
    }
  } finally {window.mockFetch=original;}
});
test("starting another route aborts its predecessor", () => {
  const first=window.beginRoute(), second=window.beginRoute();
  assert.equal(first.aborted,true); assert.equal(second.aborted,false);
  assert.notEqual(first,second);
});
test("only a current result updates the route as literal text", () => {
  const current=new AbortController(), old=new AbortController(); old.abort();
  window.showRouteResult({name:"<img src=x> Fast"},current.signal);
  window.showRouteResult({name:"Old slow"},old.signal);
  assert.text($("#route-name"),"<img src=x> Fast");
  assert.equal($("#route-name").children.length,0);
  assert.text($("#route-status"),"Route ready.");
});
test("ignore cancellation but report genuine current failures", () => {
  const current=new AbortController(), old=new AbortController(); old.abort();
  $("#route-status").textContent="New result";
  window.showRouteError(new DOMException("Cancelled","AbortError"),current.signal);
  window.showRouteError(new Error("Late old failure"),old.signal);
  assert.text($("#route-status"),"New result");
  window.showRouteError(new TypeError("Network"),current.signal);
  assert.text($("#route-status"),"Lookup failed.");
});
