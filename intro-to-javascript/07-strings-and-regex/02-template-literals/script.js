const guest = " Nia ";
const seat = "B12";

// Task 1: Trimmed two-line guest sign

// TODO: Step 1: Complete task 1 for guestSign(name, seat).
function guestSign(name, seat) {
  // Return the two-line sign.
}

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (`${String(guestSign(" Lee ","C4")).replace("\n"," | ")} / ${String(guestSign(" Jo Lee ","A1")).replace("\n"," | ")}`));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Separate supplied guest sign

// Log the supplied guest sign here.

// TODO: Step 2: Log guestSign(guest, seat) separately.
