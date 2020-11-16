// The call method can also pass arguments to the function
// ex. someObject.someMethod.call(context, arg1, arg2, arg3, ...)


let iPad = {
  name: 'iPad',
  price: 40000,
};

let kindle = {
  name: 'kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(lineNumber + ': ' + this.name + ', ' + this.price / 100 + ' dollars' + punctuation);
}


console.log(printLine.call(iPad, 1, ';'));        // => 1: iPad, 400 dollars;
console.log(printLine.call(kindle, 2, '.'));      // => 2: kindle, 300 dollars.

// use apply method  (arguments as array)
console.log(printLine.apply(kindle, [2, '.']));      // => 2: kindle, 300 dollars.