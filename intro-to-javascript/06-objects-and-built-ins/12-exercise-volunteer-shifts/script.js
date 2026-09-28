const shiftSlots = { checkIn: 2, usher: 5, cleanup: 1 };

function readAvailability(slots, requested) {
  // Return the requested count or null when absent.
}

function lowShiftNames(slots, minimum) {
  // Return the names of shifts below the minimum.
}

function auditShifts(slots, requested, minimum) {
  // Combine the helpers in { available, needsHelp }.
}

// Log checkpoints, then the audit for checkIn and a minimum of 3.

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`CHECK 1: ${readAvailability({morning:0,evening:4,night:1},"morning")} | ${readAvailability({morning:0,evening:4,night:1},"missing")}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 2: ${lowShiftNames({morning:0,evening:4,night:1},2).join(",")}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 3: ${(() => { const a=auditShifts({morning:0,evening:4,night:1},"morning",2); return `${a.available} | ${a.needsHelp.join(",")}`; })()}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 4: unchanged:${(() => { const s={morning:0,evening:4,night:1}, before=JSON.stringify(s); const result=auditShifts(s,"missing",2); return result && result.available===null && Array.isArray(result.needsHelp) && result.needsHelp.join(",")==="morning,night" && JSON.stringify(s)===before; })()}`); } catch (error) { console.log("CHECK pending"); }

// Log the final result yourself.
