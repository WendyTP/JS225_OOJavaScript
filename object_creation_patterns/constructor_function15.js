/*
Create a function neww, so that it works like the new operator. 
For this practice problem, you may use Object.create.

*/

function neww(constructor, args) {
  let obj = Object.create(constructor.prototype);
  let result = constructor.apply(obj, args);

  return typeof result === 'object' ? result : obj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}