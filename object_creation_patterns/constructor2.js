function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

console.log(Dog.prototype)   // {}

Dog.prototype.bark = function() {
  console.log(this);
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

console.log(Dog.prototype)    // { bark: [Function (anonymous)] }
Dog.prototype.bark()    // logs { bark: [Function (anonymous)] } then Yip!

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark(); // logs Dog { name: 'Maxi', breed: 'German Shepherd', weight: 32 }, then 'Woof!'

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark(); // logs Dog { name: 'Biggie', breed: 'Whippet', weight: 9 }  then 'Yip!'

console.log(Object.getPrototypeOf(biggie) === Dog.prototype) // true


console.log(Dog.prototype.constructor)  // [Function: Dog]

console.log(maxi instanceof Dog); // true
console.log(maxi.constructor === Dog); // true  (if the constructor property is not reassigned to something else)