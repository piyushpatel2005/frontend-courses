---
title: "Demo: An inherited notice"
slug: demo-inherited-behavior
order: 5
language: javascript
lesson_type: interactive
summary: Run a worked JavaScript example of an inherited notice.
seo_title: "Demo: An inherited notice | Introduction to JavaScript"
seo_description: Run and trace a worked JavaScript OOP example before the exercise.
seo_keywords: javascript, inheritance, extends, super, override
---

# An inherited notice

A specialized notice reuses a base notice’s label. `extends` connects the classes; `super(label)` initializes the parent before using `this`. The child overrides `describe()` while retaining the common part via `super.describe()`.

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

Change the hour and run again. Next, use inheritance for **shapes** that calculate their areas.
