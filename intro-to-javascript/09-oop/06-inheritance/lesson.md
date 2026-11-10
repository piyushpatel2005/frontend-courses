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
summary: "Give circles and rectangles a shared color property while letting each calculate its own area. The notice demo showed how a child constructor initializes the inherited part with `super`."
seo_title: Inheritance | Introduction to JavaScript
seo_description: "Give circles and rectangles a shared color property while letting each calculate its own area. The notice demo showed how a child constructor initializes the inherited part with `super`."
seo_keywords: javascript, inheritance, beginner javascript, programming practice
---


Give circles and rectangles a shared color property while letting each calculate its own area. The notice demo showed how a child constructor initializes the inherited part with `super`.

Store dimensions on each instance, not in fixed output strings. Circle area is `Math.PI * radius ** 2`. To return a number rounded to two decimal places, multiply by 100, round with `Math.round`, then divide by 100. Rectangle area is width times height.

The `Dog` example below has no constructor of its own; JavaScript supplies a derived constructor that forwards arguments to the parent. If you write your own derived constructor, as the exercise does, you must call `super` yourself before accessing `this`. The supplied `tryCreate` helper catches errors from unfinished constructors so the Shape task can be checked first. Its `?.` probes display missing values rather than stopping the script.

## Basic inheritance

```javascript run
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
console.log(dog.speak());
console.log(dog.toString());
```

## Calling the parent with `super`

This snippet continues with the `Animal` class above.

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

These expressions use the same `dog`, `Dog`, `Animal`, and `Cat` from the first example. The comments show returned values; an expression alone does not print a Console line.

```javascript
dog instanceof Dog;     // true
dog instanceof Animal;  // true — Dog IS an Animal
dog instanceof Cat;     // false
```

Edit `script.js`, then use **Run** to inspect the supplied checkpoints. Use **Submit** to check your tasks in order. Keep the supplied probes; change only the requested definitions and final logs.

## Your Tasks

1. Store the supplied `color` in `Shape`; the default is `"black"`.
2. Initialize `Circle` by calling `super(color)` before storing `radius`.
3. Return the circle area rounded to two decimal places from `area()`.
4. Return `Circle(radius: R, color: C, area: A)` from `toString()` using the instance values and its area method.
5. Initialize `Rectangle` by calling `super(color)` before storing `width` and `height`.
6. Return width times height from `Rectangle.area()`.
7. Return `Rectangle(W×H, color: C, area: A)` from its `toString()` using instance values.
8. Log the two descriptions, joined by ` | ` and prefixed with `mission result: `.
