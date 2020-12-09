let prot = {};
let foo = Object.create(prot);

console.log(Object.getPrototypeOf(foo) === prot); // true
console.log(prot.isPrototypeOf(foo)); // true


console.log(prot.isPrototypeOf(foo)); // true
console.log(Object.getPrototypeOf(foo) === Object.prototype); // false
console.log(Object.prototype.isPrototypeOf(foo)) // true

/* 
line #9 returns false because prot is the prototype  of foo (ie. the proprty value of prototype is foo), not Object.protype object.
This is because when an object is created by using Object.create(obj), the obj assigned to the method 
becomes the prototype of the newly created object. 
If an object is created not using Object.create(), then Object.prototype object will be the prototype object of the new object. 

line #10 returns true because:
 - Object.prototype.isPrototypeOf() method checks if an object exists in another object's prototype chain.
 - Object.prototype object is at the end of the prototype chain of all JavaScript objects 
*/