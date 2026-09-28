---
title: "Demo: Build a Reminder with Template Literals"
slug: demo-template-notice
order: 4
language: javascript
lesson_type: interactive
summary: Run a library reminder that inserts values into a template literal.
seo_title: "Template Literal Reminder Demo | Introduction to JavaScript"
seo_description: Run a JavaScript template literal that formats a library hold reminder from separate values.
seo_keywords: [javascript template literals, string interpolation, reminder message]
---

# Build a library reminder

A library needs a short reminder for a book on hold. A template literal puts each value in its place without joining fragments with `+`.

```javascript run
function holdReminder(reader, book, deadline) {
  return `Hi ${reader.trim()}, ${book} is ready. Pick it up by ${deadline}.`;
}

console.log(holdReminder(" Maya ", "Field Guide", "Friday"));
```

Run this once. Notice that `trim()` removes the extra space in the reader's name *before* interpolation; the book and deadline remain separate inputs. Try another name and deadline, then move to the pantry pickup exercise, where you will format an entire list of messages.
