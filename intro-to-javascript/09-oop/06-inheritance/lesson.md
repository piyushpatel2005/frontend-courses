---
title: Inheritance
slug: inheritance
order: 6
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `extends` to inherit: `class Child extends Parent {}`"
  - "Call `super(args)` inside the child constructor before using `this`."
  - "Override a parent method by defining it again in the child class."
summary: Practice inheritance with a focused Starline Awards programming mission.
seo_title: Inheritance | Introduction to JavaScript
seo_description: Learn inheritance through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, inheritance, beginner javascript, programming practice
---

# Inheritance

The preceding notice demo inherited a label and specialized its description. In `script.js`, give shapes shared color behavior while each subtype computes its own area; inspect the Console results.

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
class TaggedAnimal extends Animal {
    constructor(name, tag) {
        super(name); // initialize the Animal before using this
        this.tag = tag;
    }
    toString() { return `${super.toString()} #${this.tag}`; }
}
console.log(new TaggedAnimal("Rex", 5).toString()); // Animal(Rex) #5
```

## `instanceof` check

```javascript
dog instanceof Dog;     // true
dog instanceof Animal;  // true — Dog IS an Animal
dog instanceof Cat;     // false
```

## Your Tasks

1. Store the default color `black` in the `Shape` constructor. The starter logs the color.
2. Initialize `Circle` with a radius and inherited color using `super(color)`; the starter checks that it inherits `Shape`.
3. Implement `Circle.area()` rounded to two decimal places; the starter checks radius 5.
4. Implement `Circle.toString()` to return `Circle(radius: 5, color: red, area: 78.54)`; the starter logs it.
5. Initialize `Rectangle` with width, height, and inherited color; the starter checks that it inherits `Shape`.
6. Implement `Rectangle.area()` as width times height; the starter checks 4 by 6.
7. Implement `Rectangle.toString()` to return `Rectangle(4×6, color: blue, area: 24)`; the starter logs it.
8. Log both descriptions as `mission result: Circle(radius: 5, color: red, area: 78.54) | Rectangle(4×6, color: blue, area: 24)`.

