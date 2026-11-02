function choosePower(item) {
  switch (item) {
  // TODO: Step 1: Add a "sword" case returning "Blade burst".
    // Add sword here.
// TODO: Step 2: Add a "gun" case returning "Pulse shot".
    // Add gun here.
// TODO: Step 3: Add a "shield" case returning "Shield wall".
    // Add shield here.
    default: // TODO: Step 4: Make the default return "Training mode" for any other item.
return undefined;
  }
}

console.log(`Sword: ${choosePower("sword")}`);
console.log(`Gun: ${choosePower("gun")}`);
console.log(`Shield: ${choosePower("shield")}`);
console.log(`Other props: ${choosePower("pencil")},${choosePower("Sword")}`);
