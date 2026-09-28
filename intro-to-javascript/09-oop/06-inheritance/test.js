test('Shape stores its default color', () => {
  assert.includes(OUTPUT, 'shape color: black', 'Log the default Shape color');
});

test('Circle inherits Shape', () => {
  assert.includes(OUTPUT, 'circle inherits Shape: true', "Expected the labeled Console checkpoint: circle inherits Shape: true");
});

test('circle area', () => {
  assert.includes(OUTPUT, 'circle area: 78.54', "Expected the labeled Console checkpoint: circle area: 78.54");
});

test('circle description', () => {
  assert.includes(OUTPUT, 'circle description: Circle(radius: 5, color: red, area: 78.54)', "Expected the labeled Console checkpoint: circle description: Circle(radius: 5, color: red, area: 78.54)");
});

test('Rectangle inherits Shape', () => {
  assert.includes(OUTPUT, 'rectangle inherits Shape: true', "Expected the labeled Console checkpoint: rectangle inherits Shape: true");
});

test('rectangle area', () => {
  assert.includes(OUTPUT, 'rectangle area: 24', "Expected the labeled Console checkpoint: rectangle area: 24");
});

test('rectangle description', () => {
  assert.includes(OUTPUT, 'rectangle description: Rectangle(4×6, color: blue, area: 24)', "Expected the labeled Console checkpoint: rectangle description: Rectangle(4×6, color: blue, area: 24)");
});

test('mission result', () => {
  assert.match(OUTPUT, /^mission result: Circle\(radius: 5, color: red, area: 78\.54\) \| Rectangle\(4×6, color: blue, area: 24\)$/m, 'Log the combined mission result on its own line');
});

