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
let anotherSentence = `${hondaHorsepower[0]} has ${(hondaHorsepower[1], hondaHorsepower[2])}`;
console.log(anotherSentence);
// Enum
// Helps give more human readable names to numeric values.
var FamilyAges;
(function (FamilyAges) {
    FamilyAges[FamilyAges["Adam"] = 0] = "Adam";
    FamilyAges[FamilyAges["Sylvia"] = 1] = "Sylvia";
    FamilyAges[FamilyAges["Cassia"] = 2] = "Cassia";
    FamilyAges[FamilyAges["Roxie"] = 3] = "Roxie";
})(FamilyAges || (FamilyAges = {}));
let cassiaAge = FamilyAges.Cassia;
console.log(cassiaAge);
// The first value of the first item in an enum is 0, but if you assign it a new value that's what the enum will start at.
var myMomAndDadsAge;
(function (myMomAndDadsAge) {
    myMomAndDadsAge[myMomAndDadsAge["Mom"] = 66] = "Mom";
    myMomAndDadsAge[myMomAndDadsAge["Dad"] = 67] = "Dad";
})(myMomAndDadsAge || (myMomAndDadsAge = {}));
let myDadsFakeAge = myMomAndDadsAge.Dad;
console.log(myDadsFakeAge);
