/* original code
var numbers = {  
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true
    function calculate() {
      // 'this' refers to global object or undefined in strict mode
      console.log(this === numbers); // => false
      return this.numberA + this.numberB;
    }
    return calculate();
  }
};
console.log(numbers.sum()); // NaN
*/
// modified
var numbers = {  
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true
    function calculate() {
      // this refers to numbers object
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    }
    return calculate.call(this);
  }
};
console.log(numbers.sum()); // 15