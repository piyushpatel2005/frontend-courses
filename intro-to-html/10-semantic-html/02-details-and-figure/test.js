const text = el => (el?.textContent || "").trim();
const nonemptyLink = a => Boolean(text(a) && (a.getAttribute("href") || "").trim() && a.getAttribute("href") !== "#");
test("two separate answers use details", () => {
  const items = [...document.querySelectorAll("details")];
  assert.equal(items.length, 2, "Add two separate details elements");
  assert.equal(items.every(d => !d.parentElement.closest("details") && text(d.querySelector(":scope > p"))), true, "Give each separate details element its own answer paragraph");
});
test("each summary is its details first element", () => {
  const items = [...document.querySelectorAll("details")];
  assert.equal(items.length === 2 && items.every(d => d.firstElementChild?.tagName === "SUMMARY" && text(d.firstElementChild)), true, "Put a readable summary first inside each details");
});
test("exactly one answer starts open", () => {
  assert.equal(document.querySelectorAll("details[open]").length, 1, "Add open to exactly one details element");
});
test("a figure contains the described seedling image", () => {
  const image = document.querySelector("figure > img");
  assert.equal(Boolean(image?.getAttribute("src")?.startsWith("data:image/svg+xml,") && /seedling/i.test(image.getAttribute("alt") || "")), true, "Move the supplied image into a figure and describe the seedlings in alt");
});
test("caption is a direct first or last figure child", () => {
  const figure = document.querySelector("figure"), caption = figure?.querySelector(":scope > figcaption");
  assert.equal(Boolean(text(caption) && (caption === figure.firstElementChild || caption === figure.lastElementChild)), true, "Put a readable figcaption directly at the start or end of the figure");
});
