function makeList() {
  let items = [];
  return {
    add(item) {
      let index = items.indexOf(item);
      if (index === -1) {
      items.push(item);
      console.log(item + ' added!');
      }
    },

    remove(item) {
      let idx = items.indexOf(item);
      if (idx !== -1) {
        items.splice(idx, 1);
        console.log(item + ' removed!');
      } else {
        console.log('No matching item to remove.');
      }
    },

    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    },

    clear() {
      items = [];
      console.log('all items deleted!')
    },
  }
}

let list = makeList();
list.list();  // The list is empty.
list.add('peas'); // peas added!
list.list();  // peas
list.add('corn');  // corn added!
list.list();
// peas
// corn
list.remove('peas');  // peas removed!
list.list();  // corn

console.log(list.items)  // undefined

list.clear()
list.list()