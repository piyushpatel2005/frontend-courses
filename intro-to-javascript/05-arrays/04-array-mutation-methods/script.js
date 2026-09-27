const queue = ['first', 'second'];
// Add the third item here.
try { console.log(`CHECK 1: ${queue.join(",")}`); } catch (error) { console.log("CHECK pending"); }
let removedItem = '';
// Remove the last item here.
try { console.log(`CHECK 2: ${queue.join(",")} | ${removedItem}`); } catch (error) { console.log("CHECK pending"); }
// Log the final summary yourself.
