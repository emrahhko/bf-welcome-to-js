// prettier-ignore
// so prettier does not remove the extra spacing

'use strict';

// ::::: don't forget to trace the program! :::::

/* --- gather user input --- */
debugger;

let input = null;

while (input === null) {
  input = prompt('type nothing and click "enter"');

  console.log(input);
}

/* --- create a message --- */

let message = '';

if (input === '') {
  message = 'thank you for nothing!';
} else {
  message = 'this is not nothing: ' + input;
}

console.log(message);

/* --- display message to the user --- */

alert(message);

let input1 = null;

while (input1 === null) {
  input1 = prompt("type nothing again and click 'enter'");
  console.log(input1);
}

let message1 = '';
if (input1 === '') {
  message1 = 'thank you again for nothing';
} else {
  message1 = 'again this is not nothing: ' + input1;
}

console.log(message1);

alert(message1);
