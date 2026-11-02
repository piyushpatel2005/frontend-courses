
// TODO: Step 1: Complete task 1 for readCapacity(value).
function readCapacity(value) {}
try {
  const rejected = [-1, 1.5, "2", NaN].map(value => {
    try { readCapacity(value); return "accepted"; }
    catch (error) { return error.message; }
  });
  console.log(`Step 1: ${readCapacity(0)},${readCapacity(8)},${rejected.join(",")}`);
} catch { console.log("Step 1 pending"); }

// TODO: Step 2: Complete task 2 for parseOrNull(text).
function parseOrNull(text) {}
try { console.log(`Step 2: ${parseOrNull("{bad}") === null},${parseOrNull("42")},${parseOrNull('{"ready":true}').ready}`); } catch { console.log("Step 2 pending"); }
