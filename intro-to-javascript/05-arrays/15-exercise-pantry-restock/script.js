const pantry = [["Tea", 2], ["Cups", 8], ["Napkins", 4], ["Fruit", 10]];

function lowStock(stock, target) {
  // Return only pairs below the target.
}

function orderLowStock(low) {
  // Sort a copy by count.
}

function refillNames(ordered) {
  // Extract the names.
}

function missingUnits(ordered, target) {
  // Add up the deficits.
}

function planRefills(stock, target) {
  // Combine the helpers to return [names, missingTotal].
}

// Log each checkpoint and then the pantry plan.

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`CHECK 1: ${lowStock(pantry,6).map(([name])=>name).join(",")}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 2: ${orderLowStock([["Medium",3],["Low",1]]).map(([name])=>name).join(",")}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 3: ${refillNames([["Low",1],["Medium",3]]).join(",")}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 4: ${missingUnits([["Low",1],["Medium",3]],4)}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 5: ${(() => { const [names,missing]=planRefills([["Medium",3],["Low",1]],4); return `${names.join(",")} | ${missing}`; })()}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 6: ${JSON.stringify(planRefills([["Full",6]],6))}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 7: unchanged:${(() => { const items=[["Medium",3],["Low",1]], before=JSON.stringify(items); const result=planRefills(items,4); return Array.isArray(result) && Array.isArray(result[0]) && result[0].join(",")==="Low,Medium" && result[1]===4 && JSON.stringify(items)===before; })()}`); } catch (error) { console.log("CHECK pending"); }

// Log the final result yourself.
