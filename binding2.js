let greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting(name) {
    let currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  },
};

let spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buena noches, ',
};

let spanishGreeter = greetings.greeting.bind(spanishWords);

console.log(spanishGreeter('Jose'));  // Buenas tardes, Jose
console.log(spanishGreeter('Juan'));  // Buenas tardes, Juan

let englishGreeter = greetings.greeting.bind(greetings);

console.log(englishGreeter('Amy'))     //  Good afternoon, Amy
