let temperatures = [53, 86, 12, 43];

function average() {
  let total = 0;
  let i;
  console.log(this)
  for (i = this.length - 1; i >= 0; i -= 1) {
    total += this[i];
  }

  return total / this.length;
}

console.log(average.call(temperatures));           // => 48.5
 
console.log(average.bind(temperatures)());         // => 48.5

temperatures.average = average;
console.log(temperatures.average())    // => 48.5