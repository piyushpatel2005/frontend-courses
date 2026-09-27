test('Stack initializes its private items', () => {
  assert.includes(OUTPUT, 'stack initialized: true', 'Initialize the private array before using it');
});

test('size counts an empty stack', () => {
  assert.includes(OUTPUT, 'empty size: 0', 'Count the items in an empty stack');
});

test('push adds items', () => {
  assert.includes(OUTPUT, 'push size: 2', "Expected the labeled Console checkpoint: push size: 2");
});

test('pop and size', () => {
  assert.includes(OUTPUT, 'popped: 20, size: 1', "Expected the labeled Console checkpoint: popped: 20, size: 1");
});

test('empty pop', () => {
  assert.includes(OUTPUT, 'empty pop: undefined', "Expected the labeled Console checkpoint: empty pop: undefined");
});

test('peek without removing', () => {
  assert.includes(OUTPUT, 'peek: 15, size: 2', "Expected the labeled Console checkpoint: peek: 15, size: 2");
});

test('isEmpty states', () => {
  assert.includes(OUTPUT, 'empty states: true, false', "Expected the labeled Console checkpoint: empty states: true, false");
});

test('mission result', () => {
  assert.includes(OUTPUT, 'Stack size: 2 | top: 20', "Expected the labeled Console checkpoint: Stack size: 2 | top: 20");
});

