// Change code below this line
const someAdjective = "blabla";
let myStr = "Learning to code is ";
myStr += someAdjective;

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
myStr = "Hello World"; // Change this line
const thirdLetterOfLastName = lastName[2]; // Change this line
const lastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line

const teams = [
  ["Bulls", 23],
  ["White Sox", 45],
];

const myArray = [
  ["John", 23],
  ["cat", 2],
];

let removedFromMyArray = myArray.shift();
myArray.unshift(["Paul", 35]);

const myList = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
  ["e", 5],
];
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

function functionWithArgs(a, b) {
  console.log(a + b);
}
