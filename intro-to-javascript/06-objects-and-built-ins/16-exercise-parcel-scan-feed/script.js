const scanFeed = '[{"zone":"North","tracking":"P1"},{"zone":"South","tracking":"P2"},{"zone":"North","tracking":"P1"},{"zone":"South","tracking":"P3"}]';

// Task 1: Parse JSON scan arrays

// TODO: Step 1: Complete parseScans(jsonText) to parse the JSON text into an array of scan records.
function parseScans(jsonText) {
  // Parse the JSON feed.
}

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + ((() => { const scans=parseScans('[{"zone":"Dock","tracking":"T1"}]'); return `${Array.isArray(scans)} | ${scans[0].zone},${scans[0].tracking} | empty:${parseScans("[]").length}`; })()));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Count every scan in a Map

// TODO: Step 2: Complete task 2 for countByZone(scans).
function countByZone(scans) {
  // Count scans in a new Map.
}

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + ((() => { const counts=countByZone([{zone:"Dock",tracking:"T1"},{zone:"Dock",tracking:"T1"},{zone:"Gate",tracking:"T2"}]); const empty=countByZone([]); return `${counts instanceof Map} | Dock=${counts.get("Dock")} Gate=${counts.get("Gate")} | empty:${empty instanceof Map}/${empty.size}`; })()));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Distinct tracking IDs in a Set

// TODO: Step 3: Complete uniqueIds(scans) to return a Set of tracking IDs; return an empty Set for no scans.
function uniqueIds(scans) {
  // Add tracking IDs to a new Set.
}

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + ((() => { const ids=uniqueIds([{zone:"Dock",tracking:"T1"},{zone:"Dock",tracking:"T1"},{zone:"Gate",tracking:"T2"}]); const empty=uniqueIds([]); return `${ids instanceof Set} | ${[...ids].join(",")} | empty:${empty instanceof Set}/${empty.size}`; })()));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Summary combines helpers including empty data

// TODO: Step 4: Complete task 4 for summarizeScans(jsonText).
function summarizeScans(jsonText) {
  // Return { byZone, uniqueTracking }.
}

// Supplied check 4: leave this code in place.

try {
  console.log("CHECK 4: " + ((() => { const report=summarizeScans('[{"zone":"Dock","tracking":"T1"},{"zone":"Dock","tracking":"T1"}]'); const empty=summarizeScans("[]"); return `Dock=${report.byZone.get("Dock")} | unique=${report.uniqueTracking.size} | empty:${empty.byZone instanceof Map}/${empty.uniqueTracking instanceof Set}/${empty.byZone.size}/${empty.uniqueTracking.size}`; })()));
} catch (error) {
  console.log("CHECK 4: pending");
}

// Task 5: Separate parcel report

// Log the report for scanFeed here.

// TODO: Step 5: Log North: 2 | South: 2 | unique: 3 from summarizeScans(scanFeed) on its own line.
