test("repeatAction calls the callback three times", () => {
  assert.equal(typeof repeatAction, "function", "Define repeatAction as a function");
  const items = [];
  repeatAction(() => items.push('run'));
  assert.deepEqual(items, ['run', 'run', 'run'], "repeatAction should call the callback three times");
});

test("#output shows the callback results", () => {
  const out = document.getElementById("output");
  assert.exists(out);
  assert.equal(out.textContent.trim(), 'run,run,run', "#output should show the callback results");
});
