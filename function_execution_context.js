
// implicit function execution context
let obj = {
  foo1() {
    return 'this here is: ' + this;
  },
};

let car = obj.foo1;

console.log(obj.foo1());   // "this here is: [object Object]"
console.log(car());        // "this here is: [object global]"


// strict mode vs non- strict mode
function bar() {
  return 'this here is: ' + this;
}

// strict mode
function foo() {
  "use strict"
  return 'this here is: ' + this;
}


console.log(bar()); // "this here is: [object global]"
console.log(foo());  // "this here is: undefined"