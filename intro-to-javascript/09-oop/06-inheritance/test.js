test("Default color", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK color: black"), true, "Expected checkpoint: CHECK color: black");
});

test("Circle initialization", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK circle: 5,red,true"), true, "Expected checkpoint: CHECK circle: 5,red,true");
});

test("Circle areas", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK circle area: 78.54 | 12.57"), true, "Expected checkpoint: CHECK circle area: 78.54 | 12.57");
});

test("Circle description", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK circle description: Circle(radius: 5, color: red, area: 78.54)"), true, "Expected checkpoint: CHECK circle description: Circle(radius: 5, color: red, area: 78.54)");
});

test("Rectangle initialization", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK rectangle: 4,6,blue,true"), true, "Expected checkpoint: CHECK rectangle: 4,6,blue,true");
});

test("Rectangle areas", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK rectangle area: 24 | 6"), true, "Expected checkpoint: CHECK rectangle area: 24 | 6");
});

test("Rectangle description", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("CHECK rectangle description: Rectangle(4\u00d76, color: blue, area: 24)"), true, "Expected checkpoint: CHECK rectangle description: Rectangle(4\u00d76, color: blue, area: 24)");
});

test("Shape summary", () => {
  assert.equal(OUTPUT.split(/\r?\n/).includes("mission result: Circle(radius: 5, color: red, area: 78.54) | Rectangle(4\u00d76, color: blue, area: 24)"), true, "Expected checkpoint: mission result: Circle(radius: 5, color: red, area: 78.54) | Rectangle(4\u00d76, color: blue, area: 24)");
});
