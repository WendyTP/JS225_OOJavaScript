// use 'call' or 'apply' method to change a function's execution context at execution time

a = 1;

let obj = {
  a: 'hello',
  b: 'world',
};

function foo() {
  return this.a;
}

//console.log(foo())   // 1 (context is global object)
//console.log(foo.call(obj))  // 'hello' (context is obj)


let strings = {
  a: 'hello',
  b: 'world',
  foo1() {
    return this.a + this.b;
  },
};

let numbers = {
  a: 1, 
  b: 2,
};

console.log(strings.foo1());   // helloworld
console.log(strings.foo1.call(numbers));   // 3
