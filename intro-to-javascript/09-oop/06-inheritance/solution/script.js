class Shape {
  constructor(color = "black") { this.color = color; }
}
class Circle extends Shape {
  constructor(radius, color) { super(color); this.radius = radius; }
  area() { return Math.round(Math.PI * this.radius ** 2 * 100) / 100; }
  toString() { return `Circle(radius: ${this.radius}, color: ${this.color}, area: ${this.area()})`; }
}
class Rectangle extends Shape {
  constructor(width,height,color) { super(color); this.width = width; this.height = height; }
  area() { return this.width * this.height; }
  toString() { return `Rectangle(${this.width}×${this.height}, color: ${this.color}, area: ${this.area()})`; }
}
// Supplied guard: unfinished derived constructors must not stop earlier checks.
function tryCreate(make) { try { return make(); } catch { return null; } }
const circle = tryCreate(() => new Circle(5,"red"));
const rect = tryCreate(() => new Rectangle(4,6,"blue"));
console.log(`mission result: ${circle.toString()} | ${rect.toString()}`);

// Supplied checkpoints. Do not replace them with fixed answers.
console.log(`CHECK color: ${new Shape().color}`);
console.log(`CHECK circle: ${circle?.radius},${circle?.color},${circle instanceof Shape}`);
console.log(`CHECK circle area: ${circle?.area()} | ${tryCreate(() => new Circle(2,"teal"))?.area()}`);
console.log(`CHECK circle description: ${circle?.toString()}`);
console.log(`CHECK rectangle: ${rect?.width},${rect?.height},${rect?.color},${rect instanceof Shape}`);
console.log(`CHECK rectangle area: ${rect?.area()} | ${tryCreate(() => new Rectangle(2,3,"teal"))?.area()}`);
console.log(`CHECK rectangle description: ${rect?.toString()}`);
