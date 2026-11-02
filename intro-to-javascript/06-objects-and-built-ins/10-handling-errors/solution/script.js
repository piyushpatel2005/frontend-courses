
function readCapacity(value) { if (!Number.isInteger(value) || value < 0) throw new Error("Invalid capacity"); return value; }
try {
  const rejected = [-1, 1.5, "2", NaN].map(value => {
    try { readCapacity(value); return "accepted"; }
    catch (error) { return error.message; }
  });
  console.log(`Step 1: ${readCapacity(0)},${readCapacity(8)},${rejected.join(",")}`);
} catch { console.log("Step 1 pending"); }

function parseOrNull(text) { try { return JSON.parse(text); } catch { return null; } }
try { console.log(`Step 2: ${parseOrNull("{bad}") === null},${parseOrNull("42")},${parseOrNull('{"ready":true}').ready}`); } catch { console.log("Step 2 pending"); }
