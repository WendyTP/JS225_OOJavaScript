let ninja;

function Ninja() {
  this.swung = true;
}

ninja = new Ninja();    // returns new object 

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());  // logs true; Even though swingSword method is defined at the prototype object of Ninja, when it is called by ninja, this would
                          // still refers to the calling object, which is ninja. 
                          
// given explanation: Even though the swingSword method is defined on the prototype after the ninja object is created, 
// the prototype chain lookup happens when the swingSword method is called on the object, and it can be found.