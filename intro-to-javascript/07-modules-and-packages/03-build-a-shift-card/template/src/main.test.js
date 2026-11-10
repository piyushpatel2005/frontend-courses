import { test, expect } from "@intercourses/test-kernel";
import { shifts } from "./data/shifts.js";
import { formatShift } from "./format/shift.js";
test("shift data includes its location", () => {
  expect(shifts[0].location).toBe("Library");
});
test("formatter includes the location from the shift", () => {
  expect(formatShift({ label: "Book swap", location: "Hall", volunteers: 3 })).toBe("Book swap at Hall — 3 volunteers");
  expect(document.querySelector("#result")).toHaveTextContent("Garden meetup at Library — 2 volunteers");
});
