let ninjaA;
let ninjaB;

function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

// console.log(ninjaA.swung); // false

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
}

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung

console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true

console.log(ninjaB.constructor);      // [Function: Ninja]
console.log(Ninja.prototype.constructor) // [Function: Ninja]
console.log(Ninja.constructor)  // [Function: Function]

console.log(ninjaB.hasOwnProperty('constructor'))  // false
console.log(Ninja.prototype.hasOwnProperty('constructor'))   // true


console.log(Ninja.prototype.__proto__)  // [Object: null prototype] {}
console.log(Ninja.__proto__) // {}
console.log(Ninja.__proto__.__proto__) // [Object: null prototype] {}


let bob = {a: 'ww'}
console.log(bob.hasOwnProperty('constructor'))  // false
console.log(bob.__proto__)  //
console.log(bob.constructor)  //[Function: Object]
console.log(bob.__proto__.constructor)   // [Function: Object]
console.log(bob.__proto__.hasOwnProperty('constructor'))  // true