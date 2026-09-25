test("visiting card has an email action link", () => {
  assert.exists(
    document.querySelector('a[href^="mailto:"]'),
    "Add an email action link using mailto:",
  );
});

test("visiting card has a phone action link", () => {
  assert.exists(
    document.querySelector('a[href^="tel:"]'),
    "Add a phone action link using tel:",
  );
});

test("visiting card has a new-tab external link", () => {
  const link = document.querySelector('a[target="_blank"][href^="http"]');
  assert.exists(link, "Add an external portfolio or LinkedIn link that opens in a new tab");
});

test("visiting card has a clear call to action", () => {
  const links = Array.from(document.querySelectorAll("a"));
  const cta = links.find((a) => /hire|contact|book|work/i.test(a.textContent || ""));
  assert.exists(cta, "Add a clear call-to-action link such as Hire Me or Contact Me");
});
