function makeCar(accelerateRate, brakeRate) {
  return {
    speed: 0,
    accelerateRate: accelerateRate,
    brakeRate: brakeRate,

    accelerate() {
      this.speed += this.accelerateRate;
    },

    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    },

  }
}

let sedan = makeCar(8,6);
sedan.accelerate();
console.log(sedan.speed);  // 8

sedan.brake();
console.log(sedan.speed);  // 2

sedan.brake();
console.log(sedan.speed);  // 0



let coupe = makeCar(12);
coupe.accelerate();
console.log(coupe.speed);  // 12

let hatchback = makeCar(9);
hatchback.accelerate();
console.log(hatchback.speed);  // 9