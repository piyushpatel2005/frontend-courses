import { shifts } from "./data/shifts.js";
import { formatShift } from "./packages/shift-labels/index.js";
document.querySelector("#result").textContent = `Shift: ${formatShift(shifts[0])}`;
