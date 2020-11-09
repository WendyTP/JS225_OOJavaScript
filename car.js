// All cars start out not moving, and sedans
// can accelerate about 8 miles per hour per second (mph/s).

let sedan = {
  speed: 0,
  rate: 8,

  accelerate() {
    this.speed += this.rate;
  },
}

console.log(sedan);
sedan.accelerate();
console.log(sedan);