test("page has an iframe", () => {
  assert.count("iframe", 1, "Add an <iframe> element to embed an external page");
});

test("iframe has a src attribute", () => {
  var iframe = document.querySelector("iframe");
  assert.exists(iframe && iframe.getAttribute("src"), "Add a src attribute to your <iframe>");
});

test("iframe has a title for accessibility", () => {
  var iframe = document.querySelector("iframe");
  assert.exists(iframe && iframe.getAttribute("title"), "Add a title attribute to describe the embedded content");
});

test("iframe has width and height", () => {
  var iframe = document.querySelector("iframe");
  assert.exists(
    iframe && (iframe.getAttribute("width") || iframe.style.width),
    "Set width and height on your <iframe>"
  );
});

test("iframe has a sandbox attribute", () => {
  var iframe = document.querySelector("iframe");
  assert.exists(iframe && iframe.hasAttribute("sandbox"), "Add a sandbox attribute to restrict the iframe's permissions");
});
