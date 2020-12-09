let ninja;

function Ninja() {
  this.swung = true;
}

ninja = new Ninja();  // returns new obj

console.log(ninja.__proto__ === Ninja.prototype);  // true
console.log(Ninja.prototype);   // {}

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

//console.log(ninja.swingSword());  // type error, swingSword is undefinecd. 
/*
When ninja obj is created at line#7, the ninja.__proto__ === Ninja.prototype, which is an empty obj.
On line#9 Ninja.prototype is reassigned to another obj; however ninja's prototype object is still the previous empty obj.

given explanation:
In this case, we didn't add a new method to the constructor function's prototype object by mutating it, 
but rather made it point to a different object. The ninja object, meanwhile, still inherited from the original
prototype object, therefore it couldn't find a swingSword method anywhere on its prototype chain.
*/


console.log(ninja.__proto__ === Ninja.prototype);  // false
console.log(ninja.__proto__);  // {}
console.log(Ninja.prototype); // { swingSword: [Function: swingSword] }