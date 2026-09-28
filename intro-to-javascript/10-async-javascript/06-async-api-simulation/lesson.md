---
title: 'Exercise: Async API Simulation'
slug: async-api-simulation
order: 6
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Combine offline user, post, and notification requests with Promise.all and a fallback.
seo_title: 'Exercise: Async API Simulation | Introduction to JavaScript'
seo_description: Combine offline user, post, and notification requests with Promise.all and a fallback.
seo_keywords: javascript, async, api, simulation, asynchronous programming
---

# Exercise: Async API Simulation

The preceding demo loaded a rehearsal schedule from offline functions. `fetchUser`, `fetchPosts`, and `fetchNotifications` here are **local fixtures**, not HTTP calls. Fetch the user first; its ID lets you request posts and notifications concurrently.

```javascript
async function loadRoute() {
  const parcel = await getParcel();
  const [driver, depot] = await Promise.all([
    getDriver(parcel.routeId), getDepot(parcel.routeId)
  ]);
  return { driver, depot };
}
```

The parcel lookup provides the ID first. The other two calls begin together. `Promise.all` rejects if either request fails; wrap the calls in `try`/`catch` for your dashboard's fallback. All three fixture functions are supplied in `script.js`.

## Your Tasks

1. Define async `loadDashboard()` and await `fetchUser()` before requesting data tied to its ID.
2. Launch the user’s posts and notifications together with `Promise.all`, passing the fetched ID to both.
3. Return `{ userName, postCount, unreadCount }`, counting only unread notifications.
4. On any rejection, return `{ userName: "Unknown", postCount: 0, unreadCount: 0 }`.
5. Implement `reportDashboard()` to log `Alex | posts: 3 | unread: 2` from the loaded dashboard. The starter calls it on startup.
