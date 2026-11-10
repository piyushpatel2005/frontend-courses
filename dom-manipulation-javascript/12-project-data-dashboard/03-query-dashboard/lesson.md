---
title: "Query Dashboard"
slug: query-dashboard
order: 3
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Inspect a trail search that sends an encoded query to an offline API fixture.
seo_title: Dashboard search URLSearchParams demo
seo_description: Explore form submission and URLSearchParams for safe query construction in a runnable offline dashboard.
seo_keywords:
  - URLSearchParams demo
  - search form
  - API filtering
---

The trail dashboard now has a search field. Enter `River` and press Search: the page should stay put and show River lookout. Try `missing`, then submit a blank field to restore every trail.

`requestURL()` builds the request from the field's current value. A blank field returns the base route; otherwise `URLSearchParams` encodes one `q` parameter. The form listener prevents navigation and calls the existing loader.

```javascript
const params = new URLSearchParams();
const term = input.value.trim();
if (term) params.set("q", term);
const url = params.size ? `${API_URL}?${params}` : API_URL;
```

The fixture reads `q` and filters its captured items. The page does not filter a second time: it renders the returned array through the same loading, failure, and empty-state code as before. This is still an offline simulation of a server query.

Try a title containing an ampersand by temporarily editing one fixture item, then searching for that title. The query value should survive unchanged. Restore the fixture after the experiment.

The next starter carries your completed event-dashboard helpers forward. Its form is already labelled; your work is to build a URL, use it in the request, and connect submission. Matching, empty, and blank results then follow from the existing code rather than three unrelated special cases.
