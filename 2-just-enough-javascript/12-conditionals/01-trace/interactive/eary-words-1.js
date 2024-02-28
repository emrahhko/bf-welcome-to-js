// #todo

'use strict';

let input = prompt('enter something with "ear" in it');

let message;
if (input === null) {
  message = 'you canceled';
} else {
  if (input.includes('ear')) {
    message = 'eary!';
  } else {
    message = 'not eary :(';
  }
}

alert(message);

let input1 = prompt("enter something with 'ine' in it");

let message1;
if (input1 === null) {
  message1 = "you didn't :(";
} else {
  if (input1.includes('ine')) {
    message1 = "year waow that's fine!";
  } else {
    message1 = 'not fine :(';
  }
}

alert(message1);
