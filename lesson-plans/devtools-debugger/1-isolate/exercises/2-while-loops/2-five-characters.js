'use strict';

// let input = null;
// while (input === null || input.length !== 5) {
//   input = prompt('enter something with 5 characters:');
// }

// let message = 'thank you for "' + input + '"!';

// alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

// My code

let input2 = null;
while (input2 === null || input2.length !== 5) {
  input2 = prompt('enter something with 5 characters:');
}

// just duplicate the code block above
let input3 = null;
while (input3 === null || input3.length !== 5) {
  input3 = prompt('enter something else with 5 characters:');
}

let message = 'thank you for "' + input2 + input3 + '"!';

alert(message);
