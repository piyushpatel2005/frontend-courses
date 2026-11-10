import { test, expect } from "@intercourses/test-kernel";
import formatHeading, { eventLabel } from "./labels.js";
test("labels.js exports a default formatter", () => {
  expect(formatHeading("Book swap")).toBe("Upcoming: Book swap");
  expect(eventLabel).toBe("Garden meetup");
});
test("main.js uses the formatter to render the label", () => {
  expect(document.querySelector("#result")).toHaveTextContent("Upcoming: Garden meetup");
});
