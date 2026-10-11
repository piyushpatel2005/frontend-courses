const car = {



};
// Supplied: observe the starting state before calling the method.
console.log(`car brand: ${car.brand}`);
console.log(`car initial speed: ${car.speed}`);
car.accelerate?.(20);
console.log(`car speed after accelerate: ${car.speed}`);


// Supplied checkpoints. Do not replace them with fixed answers.
const speedBeforeProbe = car.speed;
car.accelerate?.(5);
console.log(`CHECK another acceleration: ${car.speed}`);
car.speed = speedBeforeProbe;
