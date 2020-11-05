




let people = {
  collection: [],
  
  getLastId: function() {
    return this.collection.length;
  },

  assignNextId: function() {
    let lastId = this.getLastId();
    return lastId + 1;
  },
  

  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    });
  
    return index;
  },

  isValidPerson: function(person) {
    return typeof person.firstName === 'string' && typeof person.lastName === 'string';
  },

  add: function(person) {
    if (this.isValidPerson(person)) {
      person.id = this.assignNextId();
      this.collection.push(person);

    }
  },

  remove: function(person) {
    let index;
    if (!this.isValidPerson(person)) {
      return;
    }
  
    index = this.getIndex(person);
    if (index === -1) {
      return;
    }
  
    this.collection.splice(index, 1);
  },

  get: function(person) {
    if (this.isValidPerson(person)) {
      return this.collection[this.getIndex(person)];
    }
  },

  update: function(person) {
    if (this.isValidPerson(person)) {
      let existingPersonIdx = this.getIndex(person);

      if (existingPersonIdx === -1) {
        this.add(person);
      } else {
        this.collection[existingPersonIdx] = person;
      }
    }
  },

};


let me = {
  firstName: 'Jane',
  lastName: 'Doe',
};
let friend = {
  firstName: 'John',
  lastName: 'Smith',
};
let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

people.add(me);

people.add(friend);
console.log(people.collection);



//let sister = {firstName: 'Jane', lastName: 'Doo',}
//people.rollCall();
//console.log(people.isValidPerson(sister))
//people.add({firstName: 'Jane', lastName: 'Doo',})
//people.remove({firstName: 'Jane', lastName: 'Doo',})
//people.update({firstName: 'Amy', lastName: 'Do'})
//people.update({firstName: 'Jane', lastName: 'Doe', job:'nurse',})
people.rollCall;