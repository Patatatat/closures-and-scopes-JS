// Global Scope
var fruit = 'Apple'; //global

function bestFruit(){
  console.log(fruit);
}

bestFruit();

function countries(){
  country = 'Mexico'; //global | var country = 'Mexico' not global
  console.log(country);
}

countries();
console.log(country);