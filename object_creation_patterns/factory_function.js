// factory functions (factory object creation pattern)

function createPerson(firstName, lastName) {
  let person = {};
  person.firstName = firstName;
  person.lastName = lastName || '';
  person.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };

  return person;
}

let john = createPerson('John', 'Doe');
let jane = createPerson('Jane');

console.log(john.fullName());  // 'John Doe'
console.log(jane.fullName());  // 'Jane'

// return object literal directly
function createPerson2(firstName, lastName = '') {
  return {
    firstName,
    lastName,
    fullName() {
      return (this.firstName + ' ' + this.lastName).trim();
    },
  };
}

/* 
1. disadvantages of working with factory functions:
  - Every object created will have all the methods pre-defined, which may be redundant to certain objects
  - There's no way to know which function factory creates which object

*/