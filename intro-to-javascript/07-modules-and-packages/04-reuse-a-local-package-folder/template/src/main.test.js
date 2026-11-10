import { test, expect } from "@intercourses/test-kernel";
import { formatShift } from "./packages/shift-labels/index.js";
test("local index re-exports the shift formatter", () => {
  expect(formatShift({ label: "Book swap", location: "Hall", volunteers: 3 })).toBe("Book swap at Hall — 3 volunteers");
});
test("entry renders the shift using the local package entry", () => {
  expect(document.querySelector("#result")).toHaveTextContent("Shift: Garden meetup at Library — 2 volunteers");
});
