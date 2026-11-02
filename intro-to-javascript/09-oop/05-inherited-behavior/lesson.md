---
title: "An inherited notice"
slug: demo-inherited-behavior
order: 5
language: javascript
lesson_type: interactive
summary: "A scheduled notice is a notice with one extra field. `extends Notice` links the child class to its parent. The child constructor calls `super(label)` to initialize the parent's part of the same object, then stores `hour`. Call `super` before using `this` in a derived constructor."
seo_title: "An inherited notice | Introduction to JavaScript"
seo_description: "A scheduled notice is a notice with one extra field. `extends Notice` links the child class to its parent. The child constructor calls `super(label)` to initialize the parent's part of the same object, then stores `hour`. Call `super` before using `this` in a derived constructor."
seo_keywords: javascript, inheritance, extends, super, override
---

# An inherited notice

A scheduled notice is a notice with one extra field. `extends Notice` links the child class to its parent. The child constructor calls `super(label)` to initialize the parent's part of the same object, then stores `hour`. Call `super` before using `this` in a derived constructor.

Both classes define `describe`, so a call on the child uses the child's version: this is overriding. Inside it, `super.describe()` runs the parent method with the same instance as `this`. It returns the common label; the child adds the time. `instanceof Notice` checks whether `Notice.prototype` appears in the instance's prototype chain.

```javascript run
class Notice {
  constructor(label) { this.label = label; }
  describe() { return `Notice: ${this.label}`; }
}
class ScheduleNotice extends Notice {
  constructor(label, hour) {
    super(label);
    this.hour = hour;
  }
  describe() { return `${super.describe()} at ${this.hour}`; }
}
const notice = new ScheduleNotice("Garden club", "10:00");
console.log(notice instanceof Notice);
console.log(notice.describe());
```

## What to notice

Predict the last line if the hour were `11:00`, then trace where that value would enter the description. Next, use inheritance for **shapes** that calculate their areas.
