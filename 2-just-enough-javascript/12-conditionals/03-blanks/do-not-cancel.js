'use strict';

let input = prompt('please do not cancel');

let message = '';
if (input === null) {
  message = 'you canceled :(';
} else {
  message = 'thank you for your input: ' + input;
}

alert(message);

let input1 = prompt('please do not cancel');

let message1 = '';
if (input === null) {
  message1 = 'you canceled :(';
} else {
  message1 = 'thank you for your input: ' + input1;
}

alert(message1);
