test("page has an iframe", () => {
  assert.count("iframe", 1, "Add an <iframe> element to embed an external page");
});

test("iframe has a src attribute", () => {
  var iframe = document.querySelector("iframe");
  assert.equal(Boolean(iframe && /^https:\/\/[^/]+\/[^\s]+/.test(iframe.getAttribute("src") || "")), true, "Use a full HTTPS map embed URL in src");
});

test("iframe has a title for accessibility", () => {
  var iframe = document.querySelector("iframe");
  assert.equal(Boolean(iframe && /map/i.test(iframe.getAttribute("title") || "")), true, "Describe the map in the iframe title");
});

test("iframe has width and height", () => {
  var iframe = document.querySelector("iframe");
  assert.equal(Boolean(iframe && Number(iframe.getAttribute("width")) > 0 && Number(iframe.getAttribute("height")) > 0), true, "Set positive width and height attributes on your iframe");
});

test("iframe has a sandbox attribute", () => {
  var iframe = document.querySelector("iframe");
  assert.equal(Boolean(iframe && (iframe.getAttribute("sandbox") || "").split(/\s+/).includes("allow-scripts") && !(iframe.getAttribute("sandbox") || "").split(/\s+/).includes("allow-same-origin")), true, "Use sandbox with allow-scripts but not allow-same-origin");
});

test("iframe loads lazily", () => {
  const iframe = document.querySelector("iframe");
  assert.equal(iframe && iframe.getAttribute("loading"), "lazy", "Add loading=\"lazy\" to the iframe");
});
