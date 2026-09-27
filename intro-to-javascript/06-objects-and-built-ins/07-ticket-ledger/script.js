const ticketId = 0n;
const ticketPrice = 0;

// Define calculateTotal and log the ledger summary.

// Supplied Console probes; implement the tasks above to make each checkpoint pass.
try { console.log(`CHECK 1: ${typeof ticketId} | ${ticketId}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 2: ${ticketPrice}`); } catch (error) { console.log("CHECK pending"); }
try { console.log(`CHECK 3: ${calculateTotal(3n,19.5)}`); } catch (error) { console.log("CHECK pending"); }
