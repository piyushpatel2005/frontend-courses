const shiftSlots = { checkIn: 2, usher: 5, cleanup: 1 };

// Task 1: Lookup includes zero and missing keys

function readAvailability(slots, requested) {
  return Object.hasOwn(slots, requested) ? slots[requested] : null;
}

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (`${readAvailability({morning:0,evening:4},"morning")} | ${readAvailability({morning:0,evening:4},"evening")} | ${readAvailability({},"missing")} | ${readAvailability({},"toString")}`));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Below-minimum names in entry order

function lowShiftNames(slots, minimum) {
  return Object.entries(slots).filter(([name, count]) => count < minimum).map(([name]) => name);
}

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${lowShiftNames({morning:0,evening:4,night:1},2).join(",")} | boundary:${lowShiftNames({a:2,b:1},2).join(",")} | empty:${lowShiftNames({},2).length}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Combined audit leaves its input unchanged

function auditShifts(slots, requested, minimum) {
  return { available: readAvailability(slots, requested), needsHelp: lowShiftNames(slots, minimum) };
}

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + ((() => { const sample={morning:0,evening:4,night:1}; const before=JSON.stringify(sample); const found=auditShifts(sample,"morning",2); const absent=auditShifts(sample,"missing",2); return `${found.available} | ${found.needsHelp.join(",")} | missing:${absent.available} | unchanged:${JSON.stringify(sample)===before}`; })()));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Separate shift report

const audit = auditShifts(shiftSlots, "checkIn", 3);
console.log(`${audit.available} | ${audit.needsHelp.join(", ")}`);
