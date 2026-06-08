---
title: Classes
slug: classes
order: 2
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Class syntax: `class Name { constructor(...) { this.prop = val; } }`"
  - "Methods go directly in the class body — no commas between them."
  - "Create instances with `new`: `const obj = new MyClass(args);`"
---

# Classes

ES6 classes provide a cleaner syntax for creating objects with shared structure and behavior. Under the hood they use JavaScript's prototype system.

## Basic class

```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    toString() {
        return `Rectangle(${this.width}×${this.height})`;
    }
}

const rect = new Rectangle(5, 3);
console.log(rect.area());       // 15
console.log(rect.perimeter());  // 16
console.log(rect.toString());   // "Rectangle(5×3)"
```

## Getters and setters

```javascript
class Circle {
    #radius; // private field (ES2022)
    
    constructor(radius) {
        this.#radius = radius;
    }
    
    get radius() { return this.#radius; }
    set radius(r) {
        if (r < 0) throw new Error("Radius cannot be negative");
        this.#radius = r;
    }
    get area() { return Math.PI * this.#radius ** 2; }
}
```

## Static methods

Belong to the class itself, not instances:

```javascript
class MathUtils {
    static clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
}

MathUtils.clamp(15, 0, 10); // 10
```

## Your Task

1. Create a class `BankAccount` with:
   - Constructor `(owner, initialBalance = 0)` — stores `owner` and `balance`.
   - `deposit(amount)` — adds amount to balance (ignore negative amounts).
   - `withdraw(amount)` — subtracts amount; if insufficient funds, do nothing and return `false`; otherwise return `true`.
   - `getBalance()` — returns current balance.
   - `toString()` — returns `"BankAccount(owner: Alice, balance: $150)"`.
2. Create an account for `"Alice"` with balance `100`, deposit `50`, withdraw `30`, then display its `toString()` in `#output`.
