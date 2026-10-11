const requests = [
  { name: " Nia ", item: "produce boxes", quantity: 2 },
  { name: "Omar", item: "bread loaves", quantity: 3 }
];

// Task 1: Personalized pickup notice

function formatPickup(name, item, quantity) {
  return `Hi ${name.trim()}, your ${quantity} ${item} are ready for pickup.`;
}

// Supplied check 1: leave this code in place.

try {
  console.log("CHECK 1: " + (formatPickup(" Lee ","meal kits",2)));
} catch (error) {
  console.log("CHECK 1: pending");
}

// Task 2: Joined pickup list and empty input

function buildPickupList(requests) {
  return requests.map(request => formatPickup(request.name, request.item, request.quantity)).join("\n");
}

// Supplied check 2: leave this code in place.

try {
  console.log("CHECK 2: " + (`${String(buildPickupList([{name:" Sal ",item:"rice bags",quantity:4},{name:"Jo",item:"tea packs",quantity:2}])).replace("\n"," | ")} | empty:${buildPickupList([])===""}`));
} catch (error) {
  console.log("CHECK 2: pending");
}

// Task 3: Separate supplied pickup list

console.log(buildPickupList(requests));
