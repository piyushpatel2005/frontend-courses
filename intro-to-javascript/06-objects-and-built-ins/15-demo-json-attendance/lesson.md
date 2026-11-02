---
title: "Workshop Attendance Feed"
slug: demo-json-attendance
order: 15
language: javascript
lesson_type: interactive
summary: Parse a JSON attendance feed into a Map of topic counts and a Set of unique emails.
seo_title: JSON Attendance Map and Set Demo | Introduction to JavaScript
seo_description: Run a JSON ingestion example that groups workshop entries in a Map and deduplicates attendee emails in a Set.
seo_keywords: javascript json parse, map grouping, set deduplication
---

# Workshop attendance feed

A workshop records every visit, including repeat visits by the same attendee. Count visits by topic with a Map, and keep distinct email addresses in a Set. These answer different questions.

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

The feed starts as text. `JSON.parse()` produces an array of ordinary objects; it does not create a Map or Set for you.

For each visit, `get()` reads the previous topic count. A new topic returns `undefined`; `?? 0` supplies zero when a value is `null` or `undefined`. Add one and store the count with `set()`. Meanwhile, `add()` keeps the email only once even if it appears again.

Run the example and trace the second Audio visit. It increases Audio's count to two but does not add another email. The two email addresses stand in for two people in this sample; real attendance data may need a separate person ID.

An empty visit array would skip the loop, leaving both collections empty. Use the same behavior in the parcel scan exercise next.
