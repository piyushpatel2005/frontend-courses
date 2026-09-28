const scanFeed = '[{"zone":"North","tracking":"P1"},{"zone":"South","tracking":"P2"},{"zone":"North","tracking":"P1"},{"zone":"South","tracking":"P3"}]';

function parseScans(jsonText) {
  // Parse the JSON feed.
}

function countByZone(scans) {
  // Return a Map counting scans per zone.
}

function uniqueIds(scans) {
  // Return a Set of tracking IDs.
}

function summarizeScans(jsonText) {
  // Return { byZone, uniqueTracking } from the helpers.
}

// Log checkpoints, then the report for scanFeed.

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`CHECK 1: ${Object.values(parseScans('[{"zone":"Dock","tracking":"T1"}]')[0]).join(",")}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 2: Dock=${countByZone([{zone:"Dock",tracking:"T1"},{zone:"Dock",tracking:"T1"},{zone:"Gate",tracking:"T2"}]).get("Dock")} Gate=${countByZone([{zone:"Dock",tracking:"T1"},{zone:"Dock",tracking:"T1"},{zone:"Gate",tracking:"T2"}]).get("Gate")}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 3: ${[...uniqueIds([{zone:"Dock",tracking:"T1"},{zone:"Dock",tracking:"T1"},{zone:"Gate",tracking:"T2"}])].join(",")}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 4: ${(() => { const p=summarizeScans('[{"zone":"Dock","tracking":"T1"},{"zone":"Dock","tracking":"T1"},{"zone":"Gate","tracking":"T2"}]'); return `Dock=${p.byZone.get("Dock")} | unique=${p.uniqueTracking.size}`; })()}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 5: ${(() => { const p=summarizeScans("[]"); return `empty=${p.byZone.size}/${p.uniqueTracking.size}`; })()}`); } catch (error) { console.log("CHECK pending"); }

// Log the final result yourself.
