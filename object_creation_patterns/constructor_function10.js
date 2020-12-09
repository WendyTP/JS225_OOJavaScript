let ninjaA = (function() {
  function Ninja(){this.weight = true};
  return new Ninja();
})();



// first attempt
let ninjaB = Object.create(ninjaA.constructor.prototype);

console.log(ninjaA.constructor.prototype);   // {}
console.log(Object.getPrototypeOf(ninjaA) === ninjaA.constructor.prototype);   // true
console.log(ninjaA.__proto__.__proto__ === Object.prototype)     // true
console.log(ninjaA.__proto__.constructor)   // [Function: Ninja]

console.log(ninjaA)  // Ninja { weight: true }
console.log(ninjaB)  // Ninja {}

console.log(ninjaA.constructor)    // [Function: Ninja]
console.log(ninjaA.__proto__)  // {}

console.log(ninjaB.constructor)  // [Function: Ninja]
console.log(ninjaB.__proto__)  // {}

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
console.log(ninjaB.__proto__ === ninjaA.__proto__);    // logs true


// given solutions

/*
// use Object.create:
let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

console.log(Object.getPrototypeOf(ninjaA));  // {}

console.log(ninjaA)  // Ninja { weight: true }
console.log(ninjaB)  // Ninja {}
console.log(ninjaB.weight)  // undefined

console.log(ninjaA.constructor)    // [Function: Ninja]
console.log(ninjaA.__proto__)  // {}

console.log(ninjaB.constructor)  // [Function: Ninja]
console.log(ninjaB.__proto__)  // {}

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
console.log(ninjaB.__proto__ === ninjaA.__proto__);    // logs true
*/

/*
 //use constructor function to  create ninjaB:

let ninjaB = new ninjaA.constructor;

console.log(ninjaA)  // Ninja { weight: true }
console.log(ninjaB)  // Ninja { weight: true }

console.log(ninjaA.constructor)    // [Function: Ninja]
console.log(ninjaA.__proto__)  // {}

console.log(ninjaB.constructor)  // [Function: Ninja]
console.log(ninjaB.__proto__)  // {}

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
console.log(ninjaB.__proto__ === ninjaA.__proto__);    // logs true
*/

