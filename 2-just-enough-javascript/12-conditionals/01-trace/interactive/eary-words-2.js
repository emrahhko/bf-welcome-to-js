// #todo

'use strict';

let input = prompt('enter something with "ear" in it');

let message;
if (input !== null) {
  if (input.includes('ear')) {
    message = 'eary!';
  } else {
    message = 'not eary :(';
  }
} else {
  message = 'you canceled';
}

alert(message);

let input1 = prompt("enter something with 'ine' in it");

let message1;
if (input1 !== null) {
  if (input1.includes('ine')) {
    message1 = "waow that's fine";
  } else {
    message1 = "that's not fine :(";
  }
} else {
  message1 = "you didn't :(";
}

alert(message1);
