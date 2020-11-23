let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);  
/* 
actual output:  'undefined undefined is a undefined'
desired output:  'Christopher Turk is a Surgeon.'
This is because when we call a method outside of its object, the method loses its context,
therefore, the context becomes global.

*/