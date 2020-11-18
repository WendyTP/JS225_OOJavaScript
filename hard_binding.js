// use bind method to bind a function to a context object permanently
let object = {
  a: 'hello',
  b: 'world',
  foo() {
    console.log(`this here is: ` + this);
    return this.a + ' ' + this.b;
  },
};

let bar = object.foo;
//console.log(bar())   // 'this here is: [object global]' "undefined undefined"

// use call method
//console.log(bar.call(object))// 'this here is: [object Object]' "hello world"

// use bind method
let baz = object.foo.bind(object);
//console.log(baz)    // [Function: bound foo]
//console.log(baz())  // 'this here is: [object Object]' "hello world"


// trying to change the context
let object2 = {
  a: 'hi',
  b: 'there',
};

//console.log(baz(object2))  // 'this here is: [object Object]' "hello world"
//console.log(baz.call(object2))  // 'this here is: [object Object]' "hello world"

let bazz = object.foo.bind(object2);
console.log(bazz);     // [Function: bound foo]
console.log(bazz());   // 'this here is: [object Object]' "hi there"
