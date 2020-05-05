// Basic types
let helloWorld = 1;
helloWorld = 2;
let myAge = 44;
let myWifesAge = myAge;
myWifesAge = 42;
let fullName = "Adam Winick";
let age = 44;
let sentence = `Wzup ${fullName}, next year i'll be ${age + 1}`;
console.log(sentence);
// Arrays
// Two ways to write Array types,
// type of elements followed by []
let someNumbers = [1, 2, 3];
// second is a generic array type Array<typeOfElements>
let someMoreMNumbers = [4, 5, 6];
// Tuples
// A way to express an array with a fixed number of elements who types are known but don't /// need to be the same
let hondaHorsepower = [
    "Honda Civic Si Coupe",
    210,
    "bhp",
];
let anotherSentence = `${hondaHorsepower[0]} has ${(hondaHorsepower[1], hondaHorsepower[2])}}`;
console.log(anotherSentence);
