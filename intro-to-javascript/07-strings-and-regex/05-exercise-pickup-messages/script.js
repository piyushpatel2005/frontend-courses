function formatPickup(name, item, quantity) {
  // Return a personalized pickup notice.
}

function buildPickupList(requests) {
  // Format every request and join the notices on separate lines.
}

const requests = [
  { name: " Nia ", item: "produce boxes", quantity: 2 },
  { name: "Omar", item: "bread loaves", quantity: 3 }
];
// The supplied probes run as soon as you complete each function.
console.log(`CHECK pickup: ${formatPickup("Lee", "meal kits", 1)}`);
console.log(`CHECK list: ${buildPickupList([{ name: " Sal ", item: "rice bags", quantity: 4 }, { name: "Jo", item: "tea packs", quantity: 2 }])?.replace("\n", " | ")} | empty: ${buildPickupList([]) === "" ? "yes" : "no"}`);
// Log the completed list as a separate Console message.
