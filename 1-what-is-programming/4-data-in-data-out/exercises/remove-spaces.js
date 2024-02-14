'use strict';

/* Remove Spaces

  Data In:

  Data Out:

  Test Cases:

*/

debugger;

/* --- gather user input --- */

// let input = null;
// while (input === null) {
//   input = prompt('enter some text, all the spaces will be removed');
//   console.log(input);
// }

/* --- create new data with no spaces --- */

// let spaceless = '';
// for (let character of input) {
//   if (character !== ' ') {
//     spaceless = spaceless + character;
//     console.log(spaceless);
//   }
// }

/* --- create a final message --- */

// let message = 'before: ' + input + '\nafter: ' + spaceless;
// console.log(message);

/* --- display message to the user --- */

// alert(message);

// My code

let message = null;
while (message === null) {
  message = prompt('I will eliminate the space from your text');
  console.log(message);
}

let noSpace = '';
for (let character of message) {
  if (character !== ' ') {
    noSpace = noSpace + character;
    console.log(noSpace);
  }
}

let msg = 'before: ' + message + '\nafter: ' + noSpace;
console.log(msg);

alert(msg);
