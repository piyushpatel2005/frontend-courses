function choosePower(item) {
  switch (item) {
    case "sword": return "Blade burst";
    case "gun": return "Pulse shot";
    case "shield": return "Shield wall";
    default: return "Training mode";
  }
}

console.log(`Sword: ${choosePower("sword")}`);
console.log(`Loadout: ${["sword","gun","shield"].map(choosePower).join(",")}`);
console.log(`Pencil: ${choosePower("pencil")}`);
console.log(choosePower("shield"));
