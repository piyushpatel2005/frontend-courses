const shiftSlots = { checkIn: 2, usher: 5, cleanup: 1 };

function readAvailability(slots, requested) {
  return Object.hasOwn(slots, requested) ? slots[requested] : null;
}
const sample = { morning: 0, evening: 4, night: 1 };
console.log(`CHECK 1: ${readAvailability(sample, "morning")} | ${readAvailability(sample, "missing")}`);

function lowShiftNames(slots, minimum) {
  return Object.entries(slots)
    .filter(([name, count]) => count < minimum)
    .map(([name]) => name);
}
console.log(`CHECK 2: ${lowShiftNames(sample, 2).join(",")}`);

function auditShifts(slots, requested, minimum) {
  const available = readAvailability(slots, requested);
  const needsHelp = lowShiftNames(slots, minimum);
  return { available, needsHelp };
}
const present = auditShifts(sample, "morning", 2);
console.log(`CHECK 3: ${present.available} | ${present.needsHelp.join(",")}`);

const before = JSON.stringify(sample);
auditShifts(sample, "missing", 2);
console.log(`CHECK 4: unchanged:${JSON.stringify(sample) === before}`);

const audit = auditShifts(shiftSlots, "checkIn", 3);
console.log(`${audit.available} | ${audit.needsHelp.join(", ")}`);
