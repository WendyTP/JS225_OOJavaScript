/*
Write a function that returns the object on a given object's prototype chain where a property is defined.
input: an object and a property key
output: the object that defines the property or null if no such object found
algo:
  - set current obj = arg
  - set prototypeObj = Object.getPrototypeOf(obj)

*/

function getDefiningObject(object, propKey) {
  while(object) {

    if (object.hasOwnProperty(propKey)) {
      break;
    }

    object = Object.getPrototypeOf(object);
  }

  return object;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null