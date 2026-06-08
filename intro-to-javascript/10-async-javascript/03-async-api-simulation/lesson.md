---
title: Async API Simulation
slug: async-api-simulation
order: 3
language: javascript
lesson_type: coding
validationRules: []
hints:
  - "Use `Promise.all([...])` to run promises in parallel."
  - "Wrap `await` logic in `try/catch` for error handling."
  - "Return fallback values if one request fails."
---

# Async API Simulation

In real apps, async code often coordinates multiple network requests and handles partial failures gracefully.

## Your Task

You are given fake API helpers that return Promises:

- `fetchUser()` resolves to `{ id: 1, name: "Alex" }` after a short delay.
- `fetchPosts(userId)` resolves to an array of posts.
- `fetchNotifications(userId)` resolves to an array of notifications.

Implement:

1. `loadDashboard()` async function that:
   - fetches the user first,
   - then fetches posts and notifications in parallel with `Promise.all`.
2. Return an object:

```javascript
{
  userName: "Alex",
  postCount: 3,
  unreadCount: 2
}
```

3. If any request fails, catch the error and return:

```javascript
{
  userName: "Unknown",
  postCount: 0,
  unreadCount: 0
}
```

4. Display in `#output`: `"Alex | posts: 3 | unread: 2"`.
