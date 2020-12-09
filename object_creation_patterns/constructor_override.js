function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark(); // 'Yip!'

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark(); // 'Woof!'

let dexter = new Dog('Dexter', 'Rottweiler', 50);
maxi.bark(); // 'Woof!'

// Override bark method on dexter object
dexter.bark = function() {
  console.log('WOOFF!');
}

dexter.bark();   // 'WOOF!'
maxi.bark();     // 'woof!'