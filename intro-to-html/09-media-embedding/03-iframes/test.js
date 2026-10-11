test("one iframe follows the heading", () => {
  assert.equal(document.querySelectorAll("iframe").length, 1, "Add exactly one iframe");
  const frame = document.querySelector("iframe"), heading = document.querySelector("h1");
  assert.equal(Boolean(heading && heading.compareDocumentPosition(frame) & Node.DOCUMENT_POSITION_FOLLOWING), true, "Place the frame after the heading");
});
test("frame uses the supplied map embed address", () => {
  const frame = document.querySelector("iframe");
  assert.exists(frame, "Add the iframe first");
  assert.equal(frame.hasAttribute("srcdoc"), false, "Remove srcdoc so the map src is used");
  let url; try { url = new URL(frame.getAttribute("src")); } catch (_) {}
  assert.equal(Boolean(url && url.origin === "https://www.openstreetmap.org" && url.pathname === "/export/embed.html" && url.searchParams.get("bbox") === "-0.15,51.50,-0.12,51.52" && url.searchParams.get("layer") === "mapnik"), true, "Use the supplied OpenStreetMap embed address, not a regular map page");
});
test("frame title identifies the hall map", () => {
  const title = document.querySelector("iframe")?.getAttribute("title") || "";
  assert.equal(/map/i.test(title) && /Riverlight Community Hall/i.test(title), true, "Name the map and Riverlight Community Hall in title");
});
test("frame reserves a positive whole-number size", () => {
  const frame = document.querySelector("iframe");
  assert.equal(["width", "height"].every(a => /^\d+$/.test(frame?.getAttribute(a) || "") && Number(frame?.getAttribute(a)) > 0), true, "Use positive whole-number width and height attributes");
});
test("sandbox allows scripts only", () => {
  const tokens = (document.querySelector("iframe")?.getAttribute("sandbox") || "").trim().split(/\s+/);
  assert.equal(tokens.length === 1 && tokens[0] === "allow-scripts", true, "Use only allow-scripts in sandbox");
});
test("frame loads lazily", () => {
  assert.equal(document.querySelector("iframe")?.getAttribute("loading"), "lazy", 'Add loading="lazy"');
});
