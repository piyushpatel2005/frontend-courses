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
summary: Practice classes with a focused Starline Awards programming mission.
seo_title: Classes | Introduction to JavaScript
seo_description: Learn classes through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, classes, beginner javascript, programming practice
---

# Classes

## Mission: Talent Roster

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you build reusable artist blueprints for the Starline Awards roster. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

ES6 classes provide a cleaner syntax for creating objects with shared structure and behavior. Under the hood they use JavaScript's prototype system.

## Basic class

```javascript
class WorkshopSession {
  constructor(topic, seats) {
    this.topic = topic;
    this.seats = seats;
  }
}

console.log(new WorkshopSession("Testing", 12).topic);
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
2. Create an account for `"Alice"` with balance `100`, deposit `50`, withdraw `30`, then display its `toString()` in `#output`.
3. Verify the program behavior: deposit ignores negative amounts.
4. Verify the program behavior: withdraw reduces balance and returns true.
5. Verify the program behavior: withdraw fails on insufficient funds and returns false.
6. Verify the program behavior: toString returns formatted string.
7. Verify the program behavior: logs the mission result.
