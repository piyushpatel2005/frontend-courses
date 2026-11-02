test("skip link precedes the header", () => {
  const link = document.querySelector('body > a[href="#main-content"]'), header = document.querySelector('body > header');
  assert.equal(link?.textContent.trim(), 'Skip to main content', 'Add the named skip link directly inside body');
  assert.equal(Boolean(header && (link.compareDocumentPosition(header) & Node.DOCUMENT_POSITION_FOLLOWING)), true, 'Put the skip link before the header');
});
test("main is a unique focus destination", () => {
  const main = document.querySelector('body > main#main-content');
  assert.equal(document.querySelectorAll('[id="main-content"]').length, 1, 'Use main-content once');
  assert.equal(main?.getAttribute('tabindex'), '-1', 'Give main tabindex="-1" without adding a normal Tab stop');
});
test("pure decoration has an empty alternative", () => {
  const image = document.querySelector('img.flourish');
  assert.equal(image?.getAttribute('alt'), '', 'Use an empty alt attribute for this decorative line');
  assert.equal(Boolean(image.getAttribute('src')?.startsWith('data:image/svg+xml,')), true, 'Keep the supplied self-contained image');
});
test("route link names its destination", () => {
  const link = document.querySelector('nav a#route-link[href="#route"]');
  assert.equal(Boolean(link && /route/i.test(link.textContent) && link.textContent.trim().split(/\s+/).length >= 2), true, 'Use a descriptive label including route');
});
