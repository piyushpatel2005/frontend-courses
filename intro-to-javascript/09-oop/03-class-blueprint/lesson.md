---
title: "Demo: Independent workshop passes"
slug: demo-class-blueprint
order: 3
language: javascript
lesson_type: interactive
summary: Run a worked JavaScript example of independent workshop passes.
seo_title: "Demo: Independent workshop passes | Introduction to JavaScript"
seo_description: Run and trace a worked JavaScript OOP example before the exercise.
seo_keywords: javascript, classes, constructor, instance methods
---

# Independent workshop passes

A class is a blueprint. Each call to `new` creates a separate instance. Run this example and notice that using Mina’s pass leaves Teo’s pass unchanged.

```javascript run
class WorkshopPass {
  constructor(holder, entries) {
    this.holder = holder;
    this.entries = entries;
  }
  useEntry() { if (this.entries > 0) this.entries -= 1; }
  describe() { return `${this.holder}: ${this.entries} entries`; }
}
const mina = new WorkshopPass("Mina", 2);
const teo = new WorkshopPass("Teo", 1);
mina.useEntry();
console.log(mina.describe());
console.log(teo.describe());
```

## What to notice

Change Mina’s starting entries and run again. Next, build a **bank account** class.
