function makeList() {
  let todos = [];
  return function(todo) {
    if (todo !== undefined) {

      if (todos.includes(todo)) {
        todos.splice(todos.indexOf(todo), 1);
        console.log(`${todo} removed!`);
      } else {
        todos.push(todo);
        console.log(`${todo} added!`);
      }

    } else {
      if (todos.length === 0) {
        console.log('The list is empty.')
      } else {
        todos.forEach(todo => console.log(todo));
      }
    } 
  }
}

let list = makeList();

list();   // The list is empty.

list('make breakfast') //make breakfast added!

list('read book')   // read book added!

list();
// make breakfast
// read book

list('make breakfast'); //make breakfast removed!

list();
// read book
