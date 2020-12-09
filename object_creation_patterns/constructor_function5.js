let RECTANGLE = {
  area() {
    console.log(this);
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

// console.log(RECTANGLE.area())  // logs { area: [Function: area], perimeter: [Function: perimeter] }, NaN
// console.log(RECTANGLE.perimeter())  // NaN

/* original code
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);  // this refers to RECTANGLE object { area: [Function: area], perimeter: [Function: perimeter] }
                          //logs NaN, because when RECTANGLE.area() is called on line 18, even though it's within the constructor function, 'this' still refers to the object RECTANGLE, which 
                          // does not have property width and height.
console.log(rect1.perimeter);  // logs NaN
*/

// Adjusted code

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);   // this refers to Rectangle { width: 2, height: 3 }; logs 6
console.log(rect1.perimeter); // logs 10
