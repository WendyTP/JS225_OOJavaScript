"use strict";
/*
let obj = {
  name: 'Obj',
};

Object.defineProperties(obj, {
  age: {
    value: 30,
    writable: false,
  },
});

console.log(obj.age); // => 30
obj.age = 32;         // throws an error in strict mode
console.log(obj.age); // => 30
*/

function newPerson(name) {
 return Object.defineProperties({name: name}, {
   log: {
     value: function() {
       console.log(this.name);
     },
     writable: false,
   },
 });
}

let me = newPerson('Shane Riley');
me.log();     // => Shane Riley
//me.log = function() { console.log('Amanda Rose'); }; // throws an error
me.log();     // => Shane Riley

