test("profile has one main region", () => {
  assert.count("body main#profile", 1, 'Add one <main id="profile"> element');
  assert.count("body main", 1, "Keep one main region on the page");
});

test("profile names a volunteer", () => {
  const main = document.querySelector("main#profile");
  assert.exists(main, "Add the profile region first");
  const heading = main.querySelector("h1");
  assert.exists(heading, "Add an <h1> inside #profile");
  assert.notEqual(heading.textContent.trim(), "", "Name the volunteer");
});

test("profile describes the volunteer's role", () => {
  const main = document.querySelector("main#profile");
  assert.exists(main, "Add the profile region first");
  const paragraph = main.querySelector("p");
  assert.exists(paragraph, "Add a <p> inside #profile");
  assert.notEqual(paragraph.textContent.trim(), "", "Describe the volunteer's role");
});

test("profile has reusable skill tags", () => {
  const tags = document.querySelectorAll("main#profile .tag");
  assert.equal(tags.length >= 2, true, "Add two skill labels with class tag inside #profile");
  Array.from(tags).forEach(tag => assert.notEqual(tag.textContent.trim(), "", "Write a label for each skill"));
});
