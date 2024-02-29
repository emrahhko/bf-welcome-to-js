// #todo

'use strict';

debugger;

// let input = prompt('do whatever you want');

// let message = 'your input is ';
// if (input === null) {
//   message = 'your input is null';
//   let maybeNot = '';
//   if (input.length !== 0) {
//     maybeNot = 'not ';
//   }
//   message = message + maybeNot;
// } else {
//   message = message + input;
// }

// alert(message);

let input1 = prompt('do whatever you want');

let message1 = 'your input is ';

if (input1 !== null) {
  message1 = message1 + input1;
} else {
  message1 = 'you canceled :( ';
}

alert(message1);
