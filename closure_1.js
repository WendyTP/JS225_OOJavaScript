function greet(salut, person) {
  let capitaledSalut = salut[0].toUpperCase() + salut.slice(1);
  console.log(capitaledSalut + ', ' + person + '!');
}

function generalGreeting(func, salut) {
  return function(person) {
    return func(salut, person);
  };
}


greet('howdy', 'Joe')  // Howdy, Joe!
greet('good morning', 'Sue')  // Good morning, Sue!


let sayHello = generalGreeting(greet, 'hello');
sayHello('Brandon');  // Hello, Brandon!

let sayHi = generalGreeting(greet, 'hi');
sayHi('Sarah')   // Hi, Sarah!