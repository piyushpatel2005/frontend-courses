---
title: Inheritance
slug: inheritance
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `extends` to inherit: `class Child extends Parent {}`"
  - "Call `super(args)` inside the child constructor before using `this`."
  - "Override a parent method by defining it again in the child class."
---

# Inheritance

Inheritance lets a child class reuse and extend the behavior of a parent class.

## Basic inheritance

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }

    toString() {
        return `Animal(${this.name})`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}

class Cat extends Animal {
    speak() {
        return `${this.name} meows.`;
    }
}

const dog = new Dog("Rex");
dog.speak();     // "Rex barks."
dog.toString();  // "Animal(Rex)" — inherited from Animal
```

## Calling the parent with `super`

```javascript
class Employee extends Person {
    constructor(name, age, company) {
        super(name, age);        // calls Person's constructor
        this.company = company;
    }

    introduce() {
        return `${super.introduce()} I work at ${this.company}.`;
    }
}
```

## `instanceof` check

```javascript
dog instanceof Dog;     // true
dog instanceof Animal;  // true — Dog IS an Animal
dog instanceof Cat;     // false
```

## Your Task

1. Create a base class `Shape` with:
   - Constructor `(color = "black")`.
   - `area()` — returns `0` (to be overridden).
   - `toString()` — returns `"Shape(color: black)"`.
2. Create `Circle extends Shape` with:
   - Constructor `(radius, color)` — calls `super(color)`.
   - `area()` — returns `Math.PI * radius² ` rounded to 2 decimal places.
   - `toString()` — returns `"Circle(radius: 5, color: red, area: 78.54)"`.
3. Create `Rectangle extends Shape` with:
   - Constructor `(width, height, color)`.
   - `area()` — returns `width * height`.
   - `toString()` — returns `"Rectangle(4×6, color: blue, area: 24)"`.
4. Display in `#output`: both `toString()` values joined with `" | "`.
