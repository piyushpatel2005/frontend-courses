---
title: Once, Remove, and Bubble
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

# Once, Remove, and Bubble

A museum sound desk has one-time announcements, a chime you can disable, and two buttons inside a panel. Each behavior asks a different question about how long a listener should live and where its click should travel.

## How it works

`{ once: true }` makes a listener run on only the first click. To remove a listener later, pass the **same function object** and event name to `removeEventListener`; a new anonymous function will not match. Clicks normally bubble from a child through its ancestors, so a parent panel listener sees clicks on buttons inside it. Sometimes a child action must not also activate the parent: `event.stopPropagation()` prevents that one click from continuing upward. Use it sparingly, not on every click, because other legitimate ancestor listeners may need the event. `stopPropagation()` does not cancel a browser default; `preventDefault()` (from the previous pair) does that.

```javascript
chime.addEventListener("click", ring);
disable.addEventListener("click", function () {
  chime.removeEventListener("click", ring);
});
panel.addEventListener("click", () => log.textContent += "Panel ");
quiet.addEventListener("click", event => {
  event.stopPropagation();
  log.textContent += "Quiet ";
});
```

## Try the preview

Run the page. One-time announcement counts only its first activation. Ring the chime, disable it, then try again. A click on Normal records both Normal and Panel, while Quiet records only Quiet. Native buttons remain operable by keyboard.

## Remember

This builds on delegation: a parent sees descendant clicks because they bubble. Stopping one special child event is different from canceling a form default or unregistering a callback.

The following exercise applies these ideas to a different page.
