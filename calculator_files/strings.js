//-------------------------------------------TEMPERAL LITERATES-------------------------------------------------------

const name = "Peter";
const drink = "Pepsi";

console.log(`Hello ${name} would you like a ${drink}?`);

//----------------------------------------SMALL TEMPLATE LITERATES-------------------------------------------------
const otherName = "Peder";
const pet = "cat";
const petName = "Mandu";
const len = name.length;

console.log(`My Name is ${otherName}. \n I have a ${pet} called ${petName}`);

console.log(`The name ${name} is ${len} characters long`);

//--------------------------------------EXERCISE WITH LENGTH AND [INDEX]----------------------------------------------

const wizardName = "Albus Percival Wulfric Brian Dumblerdore";
const nameSize = wizardName.length;

console.log(`The name ${wizardName} is ${nameSize} characters long`);
console.log(wizardName.substring(1, 2));
console.log(wizardName.substring(5, 6));
console.log(wizardName.substring(4, 5));

console.log(wizardName.split());

let fullName = "John Doe";
let firstName = fullName.split(" ")[0];
console.log(fullName.substring(5, 6));

let names = ["Diamond"];
let fullNames = names.join("");

console.log(fullNames);
console.log(`The word ${names} is ${names.length} character(s) long`);

//---------------------REPEAT METHOD-------------------------------------

const mood = "Happy! ";

console.log("*".repeat(mood.length));

//----------------------STRING METHODS-----------------------------------

const german = "Goethestraße";
console.log(german.replace("ß", "ss"));

const word = "my-love";
console.log(word.indexOf("-"));
