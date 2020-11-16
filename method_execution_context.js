// implicit method execution context
let foo = {
  bar() {
    return this;
  },
};

console.log(foo);              // { bar: [Function: bar] }
console.log(foo.bar());        // { bar: [Function: bar] }
console.log(foo === foo.bar())  // true;

let alpha = {
  beta() {
    return 'this here is: ' + this;
  },
};

console.log(alpha.beta());        // this here is: [object Object]

// implicit execution is found upon method invocation, not method definition
let foo1 = {
  bar1() {
    return this;
  },
};

let baz = foo1.bar1;
console.log(baz);  // [Function: bar1]

console.log(baz() === foo1)  // false
console.log(baz() === global) // true

console.log(baz())      // Object [global] {...}