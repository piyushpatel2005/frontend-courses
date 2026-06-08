test("Circle extends Shape", () => {
  const c = new Circle(5, "red");
  assert.ok(c instanceof Shape, "Circle should be an instance of Shape");
  assert.ok(c instanceof Circle, "Circle should be an instance of Circle");
});

test("Circle area is correct", () => {
  const c = new Circle(5, "red");
  assert.equal(c.area(), 78.54, "Circle(5).area() should be 78.54");
});

test("Circle toString is correct", () => {
  const c = new Circle(5, "red");
  assert.equal(c.toString(), "Circle(radius: 5, color: red, area: 78.54)",
    "Circle toString format mismatch");
});

test("Rectangle extends Shape", () => {
  const r = new Rectangle(4, 6, "blue");
  assert.ok(r instanceof Shape, "Rectangle should be an instance of Shape");
  assert.ok(r instanceof Rectangle, "Rectangle should be an instance of Rectangle");
});

test("Rectangle area is correct", () => {
  const r = new Rectangle(4, 6, "blue");
  assert.equal(r.area(), 24, "Rectangle(4,6).area() should be 24");
});

test("Rectangle toString is correct", () => {
  const r = new Rectangle(4, 6, "blue");
  assert.equal(r.toString(), "Rectangle(4×6, color: blue, area: 24)",
    "Rectangle toString format mismatch");
});

test("#output shows both shapes", () => {
  var out = document.getElementById("output");
  assert.exists(out, "Keep the <p id=\"output\"> element");
  assert.equal(out.textContent.trim(),
    "Circle(radius: 5, color: red, area: 78.54) | Rectangle(4×6, color: blue, area: 24)",
    "Should show both shapes joined with ' | '");
});
