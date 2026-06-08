class Shape {
  constructor(color = "black") {
    this.color = color;
  }
  area() { return 0; }
  toString() { return `Shape(color: ${this.color})`; }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  area() { return Math.round(Math.PI * this.radius ** 2 * 100) / 100; }
  toString() { return `Circle(radius: ${this.radius}, color: ${this.color}, area: ${this.area()})`; }
}

class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }
  area() { return this.width * this.height; }
  toString() { return `Rectangle(${this.width}×${this.height}, color: ${this.color}, area: ${this.area()})`; }
}

const circle = new Circle(5, "red");
const rect = new Rectangle(4, 6, "blue");
document.getElementById("output").textContent = `${circle.toString()} | ${rect.toString()}`;
