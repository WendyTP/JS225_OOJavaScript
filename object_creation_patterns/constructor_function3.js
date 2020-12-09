
/* original code:
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?

The above code will output a Type error.
This is because lizzy is assigned with the return value of Lizard, which is undefined.
There is no scamper property of undefined.

To use Lizard function as constructor function, it needs to be called with the 'new' operator.
It can then create a new object from Lizard

*/


function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
console.log(lizzy);  // Lizard { scamper: [Function (anonymous)] }
console.log(lizzy.scamper()); // I'm scampering!

/*
'this' is set to the newly created object. Since the function doesn't
explictly return an object, 'this' is then returned
*/ 

