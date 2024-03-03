// #todo

'use strict';

/* Cat Detector


  Data In:

  Data Out:

  Test Cases:


*/

/* --- ? --- */

// input <- null
let input = null;

while (input === null || input === '') {
  input = prompt("please enter 'cat'");
}

input = input.toLowerCase();

let message = '';

if (input !== 'cat') {
  message = "'" + input + "' is not a cat";
} else {
  message = 'thank you for the cat';
}

alert(message);
// WHILE: input === null
//   input <- prompt('please enter "cat"')
// :END WHILE

/* --- ? --- */

// message <- ''

// IF: input !== 'cat'
//   message <- '"' + input + '" is not a cat'
// ELSE:
//   message <- 'thank you for the cat'
// :END IF

/* --- ? --- */

// alert(message)
