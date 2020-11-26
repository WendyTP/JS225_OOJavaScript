function add(first, second) {
  return first + second;
}

function addOne(func, arg1) {
  return function(arg2) {
    return func(arg1, arg2);
  }
}

let adding = addOne(add, 1);
console.log(adding(2)); // 3
console.log(adding(4));  // 5

let addTwo = addOne(add, 2);
console.log(addTwo(3));  // 5