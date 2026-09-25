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
summary: Practice inheritance with a focused Starline Awards programming mission.
seo_title: Inheritance | Introduction to JavaScript
seo_description: Learn inheritance through a focused JavaScript programming mission and console-based practice.
seo_keywords: javascript, inheritance, beginner javascript, programming practice
---

# Inheritance

## Mission: Talent Roster

You are the programmer for the Starline Awards, a live showcase for a rising superstar. This stage helps you build reusable artist blueprints for the Starline Awards roster. Keep the work in `script.js`: this course is about JavaScript programming, not changing page elements.

Run the code and use the Console as your checkpoint. Read the example, make one focused change, then complete the task.

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
2. Create `Circle extends Shape` with:
3. Create `Rectangle extends Shape` with:
4. log with `console.log()`: both `toString()` values joined with `" | "`.
5. Verify the program behavior: Rectangle area is correct.
6. Verify the program behavior: Rectangle toString is correct.
7. Verify the program behavior: logs the mission result.
