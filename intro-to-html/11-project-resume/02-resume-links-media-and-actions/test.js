test("resume includes figure with caption", () => {
  const figure = document.querySelector("figure");
  const figcaption = document.querySelector("figure figcaption");
  const img = document.querySelector("figure img");
  assert.exists(figure, "Add a <figure> element");
  assert.exists(img, "Add an image inside figure");
  assert.exists(figcaption, "Add a <figcaption> for the figure");
});

test("resume has at least 2 external links", () => {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  assert.isAtLeast(externalLinks.length, 2, "Add at least 2 external links opening in new tab");
});

test("resume has a mailto action link", () => {
  const mailto = document.querySelector('a[href^="mailto:"]');
  assert.exists(mailto, "Add a mailto contact link");
});

test("resume has downloadable resume link", () => {
  const downloadLink = document.querySelector('a[download]');
  assert.exists(downloadLink, "Add a downloadable resume link with download attribute");
});
