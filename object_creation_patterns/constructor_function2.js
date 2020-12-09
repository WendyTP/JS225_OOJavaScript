// 'this' is returned if the constructor doesn't explicitly return an object.

function Person(firstName, lastName) {
  if (!lastName) {
    return 'Please provide a last name';
  }

  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

let noLastName = new Person('John');
console.log(noLastName);   // logs an instance of a Person object (Person {})
/*
Even though the programme exited with an explicit return statment (string),
the return value of the function is still an instance of the Person type, which was created
by the Person constructor.
*/
console.log(noLastName instanceof Person); // => true


/*
To change the return value, we have to return an object instead:
*/

function Personal(firstName, lastName) {
  if (!lastName) {
    return { invalidInput: 'Please provide a last name' };
  }

  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

let noLastName2 = new Personal('John');
console.log(noLastName2);  // { invalidInput: 'Please provide a last name' }
console.log(noLastName2 instanceof Person); // => false