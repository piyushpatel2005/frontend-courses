test("repeatAction calls the callback three times", () => {
  assert.equal(typeof repeatAction, "function", "Define repeatAction as a function");
  const items = [];
  repeatAction(() => items.push('run'));
  assert.deepEqual(items, ['run', 'run', 'run'], "repeatAction should call the callback three times");
});

test("logs the mission result", () => {
  assert.includes(OUTPUT, "run,run,run", "Log the mission result with console.log()");
});
