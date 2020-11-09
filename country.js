function makeCountry(countryName, continent, visited = false) {
  return {
    name: countryName,
    continent: continent,
    visited: visited,
    
    getDescription() {
      let visitStatement = this.visited ? 'I have visisted ' + this.name : 
                                          "I haven't visisted " + this.name; 
      return this.name + ' is located in ' + this.continent + '. ' + visitStatement + '.';
    },

    visitCountry() {
      this.visited = true;
    },
  }
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa', true);

console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
console.log(canada.getDescription());      // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."
