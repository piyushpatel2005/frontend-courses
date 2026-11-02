function choosePower(item) {
  switch (item) {
    case "sword": return "Blade burst";
    case "gun": return "Pulse shot";
    case "shield": return "Shield wall";
    default: return "Training mode";
  }
}

console.log(`Sword: ${choosePower("sword")}`);
console.log(`Gun: ${choosePower("gun")}`);
console.log(`Shield: ${choosePower("shield")}`);
console.log(`Other props: ${choosePower("pencil")},${choosePower("Sword")}`);
