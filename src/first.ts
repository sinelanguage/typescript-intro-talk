// Basic types

let helloWorld = 1;
helloWorld = 2;

let myAge: number = 44;
let myWifesAge: number = myAge;
myWifesAge = 42;

let fullName: string = "Adam Winick";
let age: number = 44;
let sentence: string = `Wzup ${fullName}, next year i'll be ${age + 1}`;
console.log(sentence);

// Arrays
// Two ways to write Array types,
// type of elements followed by []
let someNumbers: number[] = [1, 2, 3];

// second is a generic array type Array<typeOfElements>
let someMoreMNumbers: Array<number> = [4, 5, 6];

// Tuples
// A way to express an array with a fixed number of elements who types are known but don't /// need to be the same

let hondaHorsepower: [string, number, string] = [
  "Honda Civic Si Coupe",
  210,
  "bhp",
];

let anotherSentence: string = `${hondaHorsepower[0]} has ${
  (hondaHorsepower[1], hondaHorsepower[2])
}`;
console.log(anotherSentence);
