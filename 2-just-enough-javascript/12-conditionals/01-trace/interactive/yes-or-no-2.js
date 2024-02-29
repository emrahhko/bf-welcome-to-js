// #todo

'use strict';

let didConfirm = confirm('yes?');

let message;
if (didConfirm === false) {
  message = 'no';
} else {
  message = 'ok';
}

alert(message);

let didConfirm1 = confirm('You sure??');

let message1;
if (didConfirm1 === false) {
  message1 = 'Nooooo :(';
} else {
  message1 = 'Nice !!!!!';
}

alert(message1);
