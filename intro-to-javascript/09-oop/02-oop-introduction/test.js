test('car stores its initial brand', () => {
  assert.includes(OUTPUT, 'car brand: Roadster', "Expected the labeled Console checkpoint: car brand: Roadster");
});

test('accelerate updates speed and logs the result', () => {
  assert.includes(OUTPUT, 'car speed after accelerate: 100', 'Expected the labeled Console checkpoint: car speed after accelerate: 100');
});

test('mission result logged separately', () => {
  assert.match(OUTPUT, /^Roadster \| 100$/m, 'Log the mission result on its own line');
});

