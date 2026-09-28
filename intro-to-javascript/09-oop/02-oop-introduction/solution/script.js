const car = {
  brand: 'Roadster',
  speed: 80,
};
console.log(`car brand: ${car.brand}`);

car.accelerate = function (amount) { this.speed += amount; };
car.accelerate(20);
console.log(`car speed after accelerate: ${car.speed}`);
console.log(`${car.brand} | ${car.speed}`);
