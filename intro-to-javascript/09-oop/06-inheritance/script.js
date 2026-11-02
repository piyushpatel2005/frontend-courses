class Shape {
  // TODO: Step 1: Store the supplied color in Shape; the default is "black".
constructor(color = "black") {  }
}
class Circle extends Shape {
  // TODO: Step 2: Initialize Circle by calling super(color) before storing radius.
constructor(radius, color) {  }
  // TODO: Step 3: Return the circle area rounded to two decimal places from area().
  // TODO: Step 6: Return width times height from Rectangle.area().
area() {  }
  // TODO: Step 4: Complete task 4 for toString().
  // TODO: Step 7: Return Rectangle(W×H, color: C, area: A) from its toString() using instance values.
toString() {  }
}
class Rectangle extends Shape {
  // TODO: Step 5: Initialize Rectangle by calling super(color) before storing width and height.
constructor(width,height,color) {  }
  area() {  }
  toString() {  }
}
// Supplied guard: unfinished derived constructors must not stop earlier checks.
function tryCreate(make) { try { return make(); } catch { return null; } }
const circle = tryCreate(() => new Circle(5,"red"));
const rect = tryCreate(() => new Rectangle(4,6,"blue"));


// Supplied checkpoints. Do not replace them with fixed answers.
// TODO: Step 8: Log the two descriptions, joined by  |  and prefixed with mission result: .
console.log(`CHECK color: ${new Shape().color}`);
console.log(`CHECK circle: ${circle?.radius},${circle?.color},${circle instanceof Shape}`);
console.log(`CHECK circle area: ${circle?.area()} | ${tryCreate(() => new Circle(2,"teal"))?.area()}`);
console.log(`CHECK circle description: ${circle?.toString()}`);
console.log(`CHECK rectangle: ${rect?.width},${rect?.height},${rect?.color},${rect instanceof Shape}`);
console.log(`CHECK rectangle area: ${rect?.area()} | ${tryCreate(() => new Rectangle(2,3,"teal"))?.area()}`);
console.log(`CHECK rectangle description: ${rect?.toString()}`);
