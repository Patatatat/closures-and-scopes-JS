//var
var firstName; //undefined

firstName = 'Andres'; 
console.log(firstName);

var lastName = "David"; // declare / assign
lastName = 'Ana'; // reassign
console.log(lastName);

var secondName = 'David'; // declaring
secondName = 'Ana'; //reassigning
console.log(secondName);

//Let

let fruit = 'Apple'; //declare and assign
fruit = 'Kiwi'; //reassign
console.log(fruit);   
// let fruit = 'Banana'; 
// console.log(fruit); => ERROR

//const
const animal = 'Dog'; //declare and assign
animal = 'Cat'; // reassign
console.log(animal); // ERROR

const vehicles = [];
vehicles.push("❌");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);