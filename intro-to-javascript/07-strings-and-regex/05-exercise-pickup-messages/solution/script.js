function formatPickup(name, item, quantity) {
  return `Hi ${name.trim()}, your ${quantity} ${item} are ready for pickup.`;
}

function buildPickupList(requests) {
  return requests.map(({ name, item, quantity }) =>
    formatPickup(name, item, quantity)
  ).join("\n");
}

const requests = [
  { name: " Nia ", item: "produce boxes", quantity: 2 },
  { name: "Omar", item: "bread loaves", quantity: 3 }
];
console.log(`CHECK pickup: ${formatPickup("Lee", "meal kits", 1)}`);
console.log(`CHECK list: ${buildPickupList([{name:" Sal ",item:"rice bags",quantity:4},{name:"Jo",item:"tea packs",quantity:2}]).replace("\n", " | ")} | empty: ${buildPickupList([]) === "" ? "yes" : "no"}`);
console.log(buildPickupList(requests));
