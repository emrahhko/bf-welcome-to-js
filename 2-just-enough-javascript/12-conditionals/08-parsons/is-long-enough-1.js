'use strict';

/* parsons-collapse: hint
  1. gather input
  2. alert a reaction
    a. sad, they canceled
    b. incorrect
    c. correct
*/

let input = prompt('something longer than 4 characters:');

if (input === null) {
  alert(':(');
} else if (input.length <= 4) {
  alert('too short!');
} else {
  alert('perfect');
}

let input1 = prompt('put something longer than 4 characters:');

if (input1 === null) {
  alert(':( :( :(');
} else if (input1.length <= 4) {
  alert('too short :(');
} else {
  alert('Niceee :)');
}

// -------------------

// alert(too short!); // distractor
// } else if (input.length < 4) { //distractor
// if (input !== null) { // distractor

// #todo
