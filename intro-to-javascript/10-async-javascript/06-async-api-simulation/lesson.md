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

# Exercise: An offline activity dashboard

Apply the rehearsal's dependency pattern to a user's activity summary. `fetchUser`, `fetchPosts`, and `fetchNotifications` are supplied local fixtures. Despite their names, they make no HTTP requests.

Wait for the user first, because both later calls need its ID. Posts and notifications do not depend on each other, so start both before waiting for their combined result. Count unread notifications with `filter(notification => !notification.read).length`.

Keep the supplied `globalThis` assignments. Call fixtures through `globalThis.fetchUser`, `globalThis.fetchPosts`, and `globalThis.fetchNotifications` so each check can provide different users and pending results. The report should call `globalThis.loadDashboard()` for the same reason.

## Your Tasks

1. In async `loadDashboard()`, await `globalThis.fetchUser()` before starting any dependent lookup.
2. Use `Promise.all` to await posts and notifications together, passing the fetched user's ID to both fixture calls.
3. Return `{ userName, postCount, unreadCount }` using the user's name, all posts, and only unread notifications.
4. Wrap the loading work in `try`/`catch` so any rejected fixture returns `{ userName: "Unknown", postCount: 0, unreadCount: 0 }`.
5. Implement `reportDashboard()` to await `globalThis.loadDashboard()` and log its fields as `Alex | posts: 3 | unread: 2` for the supplied data.

Edit `script.js`, **Run**, then **Submit**. The startup call is already supplied. Until you write the reporter the Console stays quiet, but Submit checks each loading milestone. A caught startup error while you are partway through does not mean your earlier tasks failed.

The fallback deliberately discards partial results. The next pair changes that policy: one failed provider should not hide successful providers.
