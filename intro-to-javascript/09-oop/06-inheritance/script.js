// TODO: Implement Shape base class
class Shape {
    constructor(color = "black") {

    }

    area() {

    }

    toString() {

    }
}

// TODO: Implement Circle extends Shape
class Circle extends Shape {
    constructor(radius, color) {

    }

    area() {

    }

    toString() {

    }
}

// TODO: Implement Rectangle extends Shape
class Rectangle extends Shape {
    constructor(width, height, color) {

    }

    area() {

    }

    toString() {

    }
}

// Probe each class without stopping the later checks if an unfinished constructor throws.
function tryCreate(make) { try { return make(); } catch { return null; } }
const circle = tryCreate(() => new Circle(5, "red"));
const rect = tryCreate(() => new Rectangle(4, 6, "blue"));
console.log(`shape color: ${new Shape().color}`);
console.log(`circle inherits Shape: ${circle instanceof Shape && circle instanceof Circle}`);
console.log(`circle area: ${circle?.area()}`);
console.log(`circle description: ${circle?.toString()}`);
console.log(`rectangle inherits Shape: ${rect instanceof Shape && rect instanceof Rectangle}`);
console.log(`rectangle area: ${rect?.area()}`);
console.log(`rectangle description: ${rect?.toString()}`);
// Log the combined mission result on its own line here.
