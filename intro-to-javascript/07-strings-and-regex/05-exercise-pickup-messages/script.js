const requests = [
  { name: " Nia ", item: "produce boxes", quantity: 2 },
  { name: "Omar", item: "bread loaves", quantity: 3 }
];

// Task 1: Personalized pickup notice

function formatPickup(name, item, quantity) {
  // Return the formatted notice.
}

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (formatPickup(" Lee ","meal kits",2)));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Joined pickup list and empty input

function buildPickupList(requests) {
  // Return newline-separated notices.
}

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${String(buildPickupList([{name:" Sal ",item:"rice bags",quantity:4},{name:"Jo",item:"tea packs",quantity:2}])).replace("\n"," | ")} | empty:${buildPickupList([])===""}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Separate supplied pickup list

// Log the list for requests here.
