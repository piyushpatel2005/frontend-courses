const car = {
  // TODO: Step 1: Set the car brand to "Roadster".
  // TODO: Step 2: Set its starting speed to 80.
  // TODO: Step 3: Add an accelerate(amount) method that adds amount to this.speed.



};
// Supplied: observe the starting state before calling the method.
console.log(`car brand: ${car.brand}`);
console.log(`car initial speed: ${car.speed}`);
car.accelerate?.(20);
console.log(`car speed after accelerate: ${car.speed}`);


// Supplied checkpoints. Do not replace them with fixed answers.
// TODO: Step 4: Log the final brand and speed as Roadster | 100.
const speedBeforeProbe = car.speed;
car.accelerate?.(5);
console.log(`CHECK another acceleration: ${car.speed}`);
car.speed = speedBeforeProbe;
