test("page has two public images", () => {
  const images = document.querySelectorAll("body img");
  assert.equal(images.length >= 2, true, "Add at least two <img> elements");
  Array.from(images).forEach(img => {
    const source = img.getAttribute("src") || "";
    let url;
    try { url = new URL(source); } catch (_) {}
    assert.equal(Boolean(url && url.protocol === "https:" && url.hostname && /^https:\/\//i.test(source)), true, "Use a complete HTTPS image URL");
  });
});

test("both images describe their content", () => {
  const images = document.querySelectorAll("body img");
  assert.equal(images.length >= 2, true, "Add both images before writing alt text");
  Array.from(images).forEach(img => assert.notEqual((img.getAttribute("alt") || "").trim(), "", "Give each image descriptive alt text"));
});

test("an image reserves width and height", () => {
  const sized = Array.from(document.querySelectorAll("body img")).some(img =>
    ["width", "height"].every(name => /^\d+$/.test(img.getAttribute(name) || "") && Number(img.getAttribute(name)) > 0));
  assert.equal(sized, true, "Give one image positive whole-number width and height values without px");
});

test("an image links to a page", () => {
  const linked = document.querySelector('body a[href^="https://"] img');
  assert.exists(linked, "Wrap an image in a link to a useful HTTPS page");
  let target;
  try { target = new URL(linked.closest("a").getAttribute("href")); } catch (_) {}
  assert.equal(Boolean(target && target.protocol === "https:" && target.hostname), true, "Give the image link a complete HTTPS destination");
});
