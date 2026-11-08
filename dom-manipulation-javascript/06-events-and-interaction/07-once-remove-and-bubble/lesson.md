---
title: "Once Remove And Bubble"
slug: once-remove-and-bubble
order: 7
language: javascript
runtime: srcdoc
lesson_type: coding
summary: Limit or remove click listeners and decide when a child click should bubble to its parent.
seo_title: Once, Remove, and Bubble | DOM Manipulation with JavaScript
seo_description: Compare once listeners, removeEventListener, click bubbling, and stopPropagation in a small browser
  example.
seo_keywords:
- once click listener
- removeEventListener
- event bubbling stopPropagation
---

# Control a listener's lifetime

The museum sound desk has a one-time announcement, a chime that can be disabled, and Normal and Quiet buttons inside a panel. They illustrate different reasons to limit a response.

Pass `{ once: true }` as the third argument to `addEventListener` to remove that listener after its first invocation. For later cleanup, `removeEventListener("click", ring)` must receive the same function object used at registration. A new function with identical source is still a different object. The capture setting must match too; these examples use the default, `false`.

Clicks normally bubble to ancestors. The Normal button writes Normal, then the panel writes Panel. Quiet calls `event.stopPropagation()` so its click does not continue to the panel. It still runs the button's own response. Stopping propagation does not cancel a browser default, and `preventDefault` does not stop propagation.

```javascript
chime.addEventListener("click", ring);
disable.addEventListener("click", () => {
  chime.removeEventListener("click", ring);
});
```

## Try the preview

Run and activate the announcement three times; the count stays at one. Ring the chime, disable it, then ring again; its count should stop.

Compare Normal and Quiet in the action log. Use propagation control only for the specific child that needs it, since other ancestor listeners may need ordinary clicks. Run again to restore listeners and counters before repeating the experiment.
