// Each call to makeBudget should create independent private state.
function makeBudget(startingBalance) {
  // Return a function that spends an amount if affordable.
}

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`First spend: ${makeBudget(20)(5)}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`Successive: ${(() => { const c=makeBudget(20); return `${c(3)},${c(7)}`; })()}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`Overdraw: ${(() => { const c=makeBudget(10); return `${c(11)},${c(4)}`; })()}`); } catch (error) { console.log("CHECK pending"); }
