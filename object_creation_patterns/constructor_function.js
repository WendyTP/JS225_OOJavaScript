// constructor function
function Person(firstName, lastName = '') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

// constructor function called with the 'new' operator
let john = new Person('John', 'Doe');
let jane = new Person('Jane');



console.log(john); // 'this' is returned since the constructor didn't explicitly return an object
/*
(this points to the Person object)
Person {
  firstName: 'John',
  lastName: 'Doe',
  fullName: [Function (anonymous)]
}
*/

console.log(john.fullName());              // "John Doe"
console.log(jane.fullName());              // "Jane"

console.log(john.constructor);             // function Person(..)
console.log(jane.constructor);             // function Person(..)

console.log(john instanceof Person);       // true


// constructor function Not called with the 'new' operator
let brian = Person('Brian');
console.log(brian)  // undefined
console.log(global.fullName());   // 'Brian'; 'this' points to the global object
//console.log(brian.fullName());  // TypeError: Cannot read property 'fullName' of undefined