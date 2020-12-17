/* first try
function User(first, last) {
  return  {
    name: first + ' ' + last,
  }
}
*/

function User(first, last) {
  console.log(this);
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');  // (this refers to new obj: User {})
let user2 = User('John', 'Doe')          // (this refers to global obj, then to new obj after running line 12)

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe   (this refers to new obj)
console.log(user2.name);   // => John Doe  (this refers to global obj)
