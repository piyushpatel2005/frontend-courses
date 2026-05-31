test("resume includes figure with caption", () => {
  const figure = document.querySelector("figure");
  const figcaption = document.querySelector("figure figcaption");
  const img = document.querySelector("figure img");
  assert.exists(figure, "Add a <figure> element");
  assert.exists(img, "Add an image inside figure");
  assert.exists(figcaption, "Add a <figcaption> for the figure");
});

test("resume contains required action links", () => {
  const mailto = document.querySelector('a[href^="mailto:"]');
  const downloadLink = document.querySelector('a[download]');
  const externalLinks = document.querySelectorAll('a[target="_blank"]');

  assert.exists(mailto, "Add a mailto contact link");
  assert.exists(downloadLink, "Add a downloadable resume link with download attribute");
  assert.isAtLeast(externalLinks.length, 2, "Add at least 2 external links opening in new tab");
});

test("user interaction: links can be clicked", () => {
  const links = Array.from(document.querySelectorAll("a"));
  assert.isAtLeast(links.length, 4, "Add at least four links for actions and profiles");

  let clicked = 0;
  links.slice(0, 2).forEach((link) => {
    link.addEventListener("click", () => {
      clicked += 1;
    });
    link.click();
  });

  assert.equal(clicked, 2, "Links should be clickable by user action");
});
