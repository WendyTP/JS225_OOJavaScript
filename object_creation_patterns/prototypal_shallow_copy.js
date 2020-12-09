function shallowCopy(object) {
  let newObj = Object.create(Object.getPrototypeOf(object));
  Object.getOwnPropertyNames(object).forEach(propKey => {
    newObj[propKey] = object[propKey];
  })
  return newObj;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};
bar['hasOwnProperty'] = 5;
let baz = shallowCopy(bar);
//let baz = Object.create(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz['hasOwnProperty']);   // 5
console.log(Object.prototype.hasOwnProperty.call(baz, 'a'));  // false
console.log(Object.prototype.hasOwnProperty.call(baz, 'b'));  // false