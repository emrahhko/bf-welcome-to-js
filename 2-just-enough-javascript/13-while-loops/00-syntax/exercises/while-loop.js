// prettier-ignore
// so prettier does not remove the extra spacing

'use strict';

// ::::: don't forget to trace the program! :::::

let input = null;

while (input === null) {
  input = prompt('no canceling allowed');

  console.log(input);
}

let message = 'thank you for your input: ' + input;

alert(message);

let input1 = null;

while (input1 === null) {
  input1 = prompt('again no cancelling allowed');
  console.log(input1);
}

let message1 = 'again thank you for your input: ' + input1;

alert(message1);
