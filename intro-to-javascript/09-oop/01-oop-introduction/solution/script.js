const car = {
  brand: 'Roadster',
  speed: 80,
  accelerate(amount) {
    this.speed += amount;
  }
};

car.accelerate(20);
console.log(`${car.brand} | ${car.speed}`);
