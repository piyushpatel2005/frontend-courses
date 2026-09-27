---
title: "Demo: Workshop Attendance Feed"
slug: demo-json-attendance
order: 13
language: javascript
lesson_type: interactive
summary: Parse a JSON attendance feed into a Map of topic counts and a Set of unique emails.
seo_title: JSON Attendance Map and Set Demo | Introduction to JavaScript
seo_description: Run a JSON ingestion example that groups workshop entries in a Map and deduplicates attendee emails in a Set.
seo_keywords: javascript json parse, map grouping, set deduplication
---

# Demo: Workshop Attendance Feed

A workshop sends its attendance as a JSON string. After parsing it into an array of records, group visits by topic while counting each email address only once.

```javascript run
const attendanceText = '[{"topic":"Audio","email":"a@example.test"},{"topic":"Lights","email":"b@example.test"},{"topic":"Audio","email":"a@example.test"}]';
const visits = JSON.parse(attendanceText);
const visitsByTopic = new Map();
const attendeeEmails = new Set();
for (const visit of visits) {
  visitsByTopic.set(visit.topic, (visitsByTopic.get(visit.topic) ?? 0) + 1);
  attendeeEmails.add(visit.email);
}
console.log(`${visitsByTopic.get("Audio")} visits | ${attendeeEmails.size} people`);
```

JSON is a string until `JSON.parse()` produces an array you can iterate. A `Map` stores a count for each topic; `?? 0` means “use zero only if the lookup returns `null` or `undefined`,” so it supplies the starting count for a new key. A `Set` stores distinct emails. Three visits therefore represent only two people.

## Checkpoint

Run the example, then inspect which step counts visits and which deduplicates people. The exercise applies the same pipeline to parcel scans rather than attendance.
