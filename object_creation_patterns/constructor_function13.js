/*
Create a function that can create an object with a given object as its prototype, 
without using Object.create.
*/

// first try
/*
function createObject(obj) {
  let newInstance = {};
  Object.setPrototypeOf(newInstance, obj);
  return newInstance;
}
*/

function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}


let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true
console.log(bar);  // {}