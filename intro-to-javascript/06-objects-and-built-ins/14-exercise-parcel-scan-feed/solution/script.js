const scanFeed = '[{"zone":"North","tracking":"P1"},{"zone":"South","tracking":"P2"},{"zone":"North","tracking":"P1"},{"zone":"South","tracking":"P3"}]';

function parseScans(jsonText) {
  return JSON.parse(jsonText);
}
console.log(`CHECK 1: ${Object.values(parseScans('[{"zone":"Dock","tracking":"T1"}]')[0]).join(",")}`);

function countByZone(scans) {
  const byZone = new Map();
  for (const scan of scans) {
    byZone.set(scan.zone, (byZone.get(scan.zone) ?? 0) + 1);
  }
  return byZone;
}
const probeText = '[{"zone":"Dock","tracking":"T1"},{"zone":"Dock","tracking":"T1"},{"zone":"Gate","tracking":"T2"}]';
const probeScans = parseScans(probeText);
const probeCounts = countByZone(probeScans);
console.log(`CHECK 2: Dock=${probeCounts.get("Dock")} Gate=${probeCounts.get("Gate")}`);

function uniqueIds(scans) {
  const ids = new Set();
  for (const scan of scans) ids.add(scan.tracking);
  return ids;
}
console.log(`CHECK 3: ${[...uniqueIds(probeScans)].join(",")}`);

function summarizeScans(jsonText) {
  const scans = parseScans(jsonText);
  return { byZone: countByZone(scans), uniqueTracking: uniqueIds(scans) };
}
const probe = summarizeScans(probeText);
console.log(`CHECK 4: Dock=${probe.byZone.get("Dock")} | unique=${probe.uniqueTracking.size}`);

const empty = summarizeScans("[]");
console.log(`CHECK 5: empty=${empty.byZone.size}/${empty.uniqueTracking.size}`);

const report = summarizeScans(scanFeed);
console.log(`North: ${report.byZone.get("North")} | South: ${report.byZone.get("South")} | unique: ${report.uniqueTracking.size}`);
