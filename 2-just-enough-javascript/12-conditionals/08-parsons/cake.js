'use strict';

/* parsons-collapse: hint

  0. strict mode!
  1. declare input variable
  2. declare message
  3. if input is true
    - assign "me too!" to the message
    else
    - assign "me neither!" to the the message
  4. display the message
*/

let likesCake = confirm('do you like cake?');

let message = '';
if (likesCake === true) {
  message = 'me too!';
} else {
  message = 'me neither!';
}

alert(message);

let likesCake1 = confirm('do you like cake?');

let message1 = '';
if (likesCake1 === true) {
  message1 = 'me too :)';
} else {
  message1 = 'me neither :(';
}

alert(message1);

// --- distractors ---

// } // distractor
// { // distractor
// ] else [ // distractor
// if likesCake === true: // distractor
