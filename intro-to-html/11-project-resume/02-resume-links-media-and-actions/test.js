test("resume includes a captioned project image", () => {
  const figure = document.querySelector("main figure");
  assert.exists(figure, "Add a <figure> inside the resume main region");
  const img = figure.querySelector("img");
  const caption = figure.querySelector("figcaption");
  assert.equal(Boolean(img?.getAttribute("src")?.trim() && img?.getAttribute("alt")?.trim()), true, "Give the image a source and descriptive alt text");
  assert.equal(Boolean(caption?.textContent.trim()), true, "Add a visible caption to the figure");
});

test("resume has two safe external work links", () => {
  const external = Array.from(document.querySelectorAll('main a[target="_blank"]')).filter(a =>
    /^https:\/\//.test(a.getAttribute("href") || "") &&
    (a.getAttribute("rel") || "").split(/\s+/).includes("noopener") &&
    a.textContent.trim()
  );
  assert.equal(external.length >= 2, true, "Add two labeled HTTPS work links with target=\"_blank\" and rel=\"noopener\"");
});

test("resume has an email action", () => {
  const mailto = document.querySelector('a[href="mailto:sam.rivera@example.com"]');
  assert.equal(Boolean(mailto?.textContent.trim()), true, "Add a labeled mailto link for Sam");
});

test("resume has a PDF download link", () => {
  const link = document.querySelector('a[href="sam-rivera-resume.pdf"][download]');
  assert.equal(Boolean(link?.textContent.trim()), true, "Link to sam-rivera-resume.pdf with download and readable text");
});
