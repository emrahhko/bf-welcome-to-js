'use strict';

/*

  Trace the following code by commenting and uncommenting the different values for the 'weather' variable.
  See what happens every time and different value is used
  and identify the exact line that is being executed

*/

let weather = 'summer';
// let weather = "summer";
// let weather = "winter";
// let weather = "fall";
// let weather = "holidays";

let clothingChoice = '';

if (weather === 'spring') {
  clothingChoice = 'Put on rain boots.';
} else if (weather === 'summer') {
  clothingChoice = 'Make sure to take your sunscreen.';
} else if (weather === 'fall') {
  clothingChoice = 'Wear a light jacket.';
} else if (weather === 'winter') {
  clothingChoice = 'Wear a heavy coat.';
} else {
  clothingChoice = 'Invalid weather type.';
}

console.log(clothingChoice);

// Taken from: https://www.codecademy.com/courses/introduction-to-javascript/quizzes/learn-javascript-control-flow-control-flow-quiz

let weather1 = 'holidays';
// let weather1 = "summer";
// let weather1 = "summer";
// let weather1 = "summer";
// let weather1 = "summer";
let clothingChoice1 = '';

if (weather1 === 'summer') {
  clothingChoice1 = 'Make sure to take your sunscreen.';
} else if (weather1 === 'winter') {
  clothingChoice1 = 'Wear a heavy coat.';
} else if (weather1 === 'spring') {
  clothingChoice1 = 'put on rain boots.';
} else if (weather1 === 'fall') {
  clothingChoice1 = 'wear a light jacket.';
} else if (weather1 === 'holidays') {
  clothingChoice1 = 'merry christmas and happy new year';
} else {
  clothingChoice1 = 'invalid weather type.';
}

console.log(clothingChoice1);
