'use strict';

// let input = prompt('enter something with 5 characters:');

// let message = '';
// if (input === null) {
//   message = ':(';
// } else if (input.length < 5) {
//   message = 'too short';
// } else if (input.length === 5) {
//   message = 'thank you!';
// } else {
//   message = 'too long';
// }

// alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/

// My code

let input2 = '';

input2 = prompt('enter something with 5 characters:');

let message2 = '';

if (input2.length > 5) {
  message2 = 'too long';
} else if (input2.length < 5) {
  message2 = 'too short';
} else {
  message2 = 'perfect!';
}

alert(message2);
