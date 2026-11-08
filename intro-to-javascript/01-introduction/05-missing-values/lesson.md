---
title: "Missing Values"
slug: missing-values
order: 5
language: javascript
lesson_type: coding
summary: Recognize undefined and null and choose a fallback without replacing zero.
seo_title: Missing values and deliberate emptiness | Introduction to JavaScript
seo_description: Recognize undefined and null and choose a fallback without replacing zero.
seo_keywords: [javascript, missing values, beginner programming]
hints:
  - Complete one numbered change and inspect its supplied checkpoint before moving on.
---

# Missing values and deliberate emptiness

A field can be missing even when the rest of a record is usable. `undefined` commonly means no value was supplied: a `let` declaration without an initializer has that value. `null` is an explicit value you can choose to mean “nothing selected.” Neither is the text `"undefined"` or `"null"`.

```javascript run
let deliveryNote;
const chosenLocker = null;
console.log(deliveryNote, chosenLocker);
console.log(deliveryNote ?? "No note");
console.log(0 ?? 8);
```

`left ?? fallback` evaluates the fallback only when the left value is `null` or `undefined`. Zero and empty text stay as they are. Do not replace a legitimate zero just because a field is optional.

`typeof undefined` is `"undefined"`. For historical reasons, `typeof null` is `"object"`; that does not make null a usable object. Check `value === null` when you need to recognize that exact value. `===` compares without converting types; the decisions section will give you more practice with it.

The fields below represent a missing note, no selected seat, and a real count of zero. Report their values rather than inventing a replacement for the source data.

Edit `script.js`. Leave the supplied probes in place; Run after each change and Submit to check the ordered tasks.

## Your Tasks

1. Set `noSeat` to `null`, without quotes.
2. Set `noteLabel` to `incomingNote ?? "No note"`.
3. Set `reportedCount` to `remaining ?? 10`, keeping the genuine zero.
