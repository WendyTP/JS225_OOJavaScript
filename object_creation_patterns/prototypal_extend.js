/*
Write a function that extends an object (destination object) with contents from multiple objects (source objects).
input: multiple inputs (destination obj and other objs)
output: updated destination with all properties of other objs
data: multi args as array of args
algo:
- #1 add propeties of one obj to another obj
  - get all property keys from obj
  - iterate through each key, add the key and value to destination obj

- iterate through all objs and repeat process #1
- return updated obj
*/

function extend(...destination) {
  let destinationObj = destination[0];

  destination.slice(1).forEach(obj => {
    addProperties(destinationObj, obj);
  })
  
  return destinationObj;
}

function addProperties(destination, source) {
  Object.getOwnPropertyNames(source).forEach(propKey => {
    destination[propKey] = source[propKey];
  })
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe