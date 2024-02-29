// #todo

'use strict';

let input = prompt('enter anything longer than 5 characters');

let message;
if (input === null) {
  message = 'you canceled :(';
} else if (input.length === 5) {
  message = 'exactly 5!';
} else if (input.length > 5) {
  message = 'long enough';
} else {
  message = 'too short';
}

alert(message);

let input1 = prompt('enter something longer than 5 characters');

let message1;
if (input1 === null) {
  message1 = 'you canceled';
} else if (input1.length === 5) {
  message1 = 'exactly 5';
} else if (input1.length > 5) {
  message1 = 'long enough';
} else {
  message1 = 'too short';
}

alert(message1);
/* distractors:

  If

  Else

*/
