const scanFeed = '[{"zone":"North","tracking":"P1"},{"zone":"South","tracking":"P2"},{"zone":"North","tracking":"P1"},{"zone":"South","tracking":"P3"}]';

// Task 1: Parse JSON scan arrays

function parseScans(jsonText) {
  return JSON.parse(jsonText);
}

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + ((() => { const scans=parseScans('[{"zone":"Dock","tracking":"T1"}]'); return `${Array.isArray(scans)} | ${scans[0].zone},${scans[0].tracking} | empty:${parseScans("[]").length}`; })()));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Count every scan in a Map

function countByZone(scans) {
  const byZone = new Map();
  for (const scan of scans) {
    byZone.set(scan.zone, (byZone.get(scan.zone) ?? 0) + 1);
  }
  return byZone;
}

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + ((() => { const counts=countByZone([{zone:"Dock",tracking:"T1"},{zone:"Dock",tracking:"T1"},{zone:"Gate",tracking:"T2"}]); const empty=countByZone([]); return `${counts instanceof Map} | Dock=${counts.get("Dock")} Gate=${counts.get("Gate")} | empty:${empty instanceof Map}/${empty.size}`; })()));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Distinct tracking IDs in a Set

function uniqueIds(scans) {
  const ids = new Set();
  for (const scan of scans) ids.add(scan.tracking);
  return ids;
}

// Supplied check 3: leave this code in place.

try {
  console.log("CHECK 3: " + ((() => { const ids=uniqueIds([{zone:"Dock",tracking:"T1"},{zone:"Dock",tracking:"T1"},{zone:"Gate",tracking:"T2"}]); const empty=uniqueIds([]); return `${ids instanceof Set} | ${[...ids].join(",")} | empty:${empty instanceof Set}/${empty.size}`; })()));
} catch (error) {
  console.log("CHECK 3: pending");
}

// Task 4: Summary combines helpers including empty data

function summarizeScans(jsonText) {
  const scans = parseScans(jsonText);
  return { byZone: countByZone(scans), uniqueTracking: uniqueIds(scans) };
}

// Supplied check 4: leave this code in place.

try {
  console.log("CHECK 4: " + ((() => { const report=summarizeScans('[{"zone":"Dock","tracking":"T1"},{"zone":"Dock","tracking":"T1"}]'); const empty=summarizeScans("[]"); return `Dock=${report.byZone.get("Dock")} | unique=${report.uniqueTracking.size} | empty:${empty.byZone instanceof Map}/${empty.uniqueTracking instanceof Set}/${empty.byZone.size}/${empty.uniqueTracking.size}`; })()));
} catch (error) {
  console.log("CHECK 4: pending");
}

// Task 5: Separate parcel report

const report = summarizeScans(scanFeed);
console.log(`North: ${report.byZone.get("North")} | South: ${report.byZone.get("South")} | unique: ${report.uniqueTracking.size}`);
