let shape = {
  getType: function() {return this.type},
};

function Triangle(side1, side2, side3) {
  this.a = side1;
  this.b = side2;
  this.c = side3;
  this.type = 'triangle';
};

console.log(Triangle.prototype)      // {}
console.log(Triangle.prototype.constructor)  // [Function: Triangle]

// change Triangle prototype
Triangle.prototype = shape;

console.log(Triangle.prototype)      // { getType: [Function: getType] }
console.log(Triangle.prototype.constructor)  // [Function: Object]

// create new instance of Triangle
let t = new Triangle(3, 4, 5);
console.log(t.a);                   // 3
console.log(t)   // { a: 3, b: 4, c: 5, type: true }

console.log(t.constructor)          // [Function: Object]
console.log(shape.isPrototypeOf(t));  // true

// change Triangle.prototype constructor
/*
  Typically, a function's prototype object will automatically have a property constructor pointing to the function (ie. Triangle).
 since we pointed the Triangle function's prototype to shape, we lost that constructor reference. 
Therefore we have to set it back manually.
*/
Triangle.prototype.constructor = Triangle;

console.log(t.constructor)          // [Function: Triangle]
console.log(shape.isPrototypeOf(t));  // true


Triangle.prototype.getPerimeter = function() {
  return (this.a + this.b + this.c);
};


console.log(t.getType());  // 'triangle'
console.log(t.getPerimeter());  // 12