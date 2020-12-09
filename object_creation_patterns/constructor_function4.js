let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  //console.log(this)
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}


foo = new Foo();  // logs : Foo { a: 2}; logs 2 as value of a

foo.bar();  //  logs : Foo { a: 2};  logs 2

Foo();  //logs global object; logs 2 as value of a

obj = {};
Foo.call(obj);  // logs { a: 2 }; logs 2 as value of a
obj.bar();    // logs 2; since Foo.call(obj) adds bar as property

console.log(this.a);  // logs undefined (there's an additional scope when running code from a file with node => module/file scope., which doesn't have property a)
console.log(global.a); // logs 2 (a gets set via Foo() invocation)
console.log(this)  // longs {}
console.log(this === module.exports); // logs true

