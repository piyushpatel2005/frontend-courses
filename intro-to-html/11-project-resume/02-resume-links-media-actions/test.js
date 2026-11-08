const text = el => (el?.textContent || "").trim();
const nonemptyLink = a => Boolean(text(a) && (a.getAttribute("href") || "").trim() && a.getAttribute("href") !== "#");
function keepResume() {
  const main = document.querySelector("body > main");
  const sections = [...(main?.querySelectorAll(":scope > section") || [])];
  assert.equal(document.querySelectorAll("main").length, 1, "Keep the resume's one main region");
  assert.equal(text(document.querySelector("body > header h1")), "Sam Rivera", "Keep Sam's header");
  assert.equal(text(document.querySelector("body > header p")), "Volunteer Coordinator", "Keep Sam's role");
  assert.equal(sections.slice(0,3).map(s => text(s.querySelector("h2")).toLowerCase()).join("|"), "professional summary|skills|work experience", "Keep the existing three sections in order");
  assert.equal(Boolean(text(sections[0]?.querySelector("p")) && text(sections[2]?.querySelector("p"))), true, "Keep the summary and experience descriptions");
  assert.equal(new Set([...(sections[1]?.querySelectorAll("ul > li") || [])].map(el => text(el).toLowerCase()).filter(Boolean)).size >= 3, true, "Keep at least three different skills");
  assert.equal(text(document.querySelector("body > footer")).includes("sam.rivera@example.com"), true, "Keep Sam's contact footer");
}
function workLink(path) {
  return [...document.querySelectorAll("main a")].some(a => a.getAttribute("href") === "https://example.com/" + path && a.getAttribute("target") === "_blank" && (a.getAttribute("rel") || "").split(/\s+/).includes("noopener") && /new tab/i.test(text(a)) && text(a).toLowerCase().includes(path === "portfolio" ? "portfolio" : "project"));
}
test("project image is described inside a main figure", () => {
  keepResume();
  const image = document.querySelector("main figure > img");
  assert.equal(Boolean(image?.getAttribute("src")?.startsWith("data:image/svg+xml,") && /makers fair/i.test(image.getAttribute("alt") || "") && /sign/i.test(image.getAttribute("alt") || "")), true, "Move the supplied image into a main figure and describe the Makers Fair sign in alt");
});
test("project caption belongs directly to the figure", () => {
  keepResume();
  const figure = document.querySelector("main figure"), caption = figure?.querySelector(":scope > figcaption");
  assert.equal(Boolean(text(caption) && (caption === figure.firstElementChild || caption === figure.lastElementChild)), true, "Place a readable figcaption first or last inside the main figure");
});
test("portfolio link explains and safely opens its destination", () => {
  keepResume();
  assert.equal(workLink("portfolio"), true, "Add the portfolio link in main with a new-tab notice, target and noopener");
});
test("project link explains and safely opens its destination", () => {
  keepResume();
  assert.equal(workLink("projects"), true, "Add the separate project link in main with a new-tab notice, target and noopener");
});
test("contact action addresses Sam", () => {
  keepResume();
  const link = document.querySelector('main a[href="mailto:sam.rivera@example.com"], footer a[href="mailto:sam.rivera@example.com"]');
  assert.equal(Boolean(text(link)), true, "Add a labeled mailto link in main or footer");
});
test("resume download names the PDF", () => {
  keepResume();
  const link = document.querySelector('main a[href="sam-rivera-resume.pdf"][download], footer a[href="sam-rivera-resume.pdf"][download]');
  assert.equal(Boolean(text(link)), true, "Add a labeled PDF download link in main or footer");
});
