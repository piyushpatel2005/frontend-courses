import { test, expect } from "@intercourses/test-kernel";
import { eventLabel } from "./labels.js";
test("labels.js exports the event label", () => {
  expect(eventLabel).toBe("Garden meetup");
});
test("main.js imports and renders the label", () => {
  expect(document.querySelector("#result")).toHaveTextContent("Next: Garden meetup");
});
