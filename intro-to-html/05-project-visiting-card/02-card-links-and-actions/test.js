test("visiting card has required action links", () => {
  const emailLink = document.querySelector('a[href^="mailto:"]');
  const phoneLink = document.querySelector('a[href^="tel:"]');
  const externalLink = document.querySelector('a[target="_blank"]');

  assert.exists(emailLink, "Add an email action link using mailto:");
  assert.exists(phoneLink, "Add a phone action link using tel:");
  assert.exists(externalLink, "Add one external link with target=\"_blank\"");
});

test("page has a call-to-action link", () => {
  const links = Array.from(document.querySelectorAll("a"));
  const cta = links.find((a) => /hire|contact|book|work/i.test(a.textContent || ""));
  assert.exists(cta, "Add a clear call-to-action link such as Hire Me or Contact Me");
});

test("user can click action links", () => {
  const link = document.querySelector("a");
  assert.exists(link, "Add at least one action link");

  let clicked = false;
  link.addEventListener("click", () => {
    clicked = true;
  });
  link.click();

  assert.isTrue(clicked, "Action links should be clickable");
});
