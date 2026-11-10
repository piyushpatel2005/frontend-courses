import { shifts } from "./data/shifts.js";
import { formatShift } from "./format/shift.js";
document.querySelector("#result").textContent = formatShift(shifts[0]);
