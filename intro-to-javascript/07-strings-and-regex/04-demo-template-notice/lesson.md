---
title: "Build a Reminder with Template Literals"
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

A library has a reader, a book title, and a pickup deadline. Put those inputs into one message without joining text fragments with `+`.

```javascript run
function holdReminder(reader, book, deadline) {
  return `Hi ${reader.trim()}, ${book} is ready. Pick it up by ${deadline}.`;
}
console.log(holdReminder(" Maya ", "Field Guide", "Friday"));
```

Before running, locate the three substitutions. Only the reader's name calls `trim()`; the book title and deadline are inserted as provided.

Run and check that the output begins `Hi Maya,` rather than keeping the spaces around the supplied name. The function returns the message; the outer `console.log()` displays it. Keeping those jobs separate lets you use the returned string in a longer list, which you will do in the pantry exercise next.
