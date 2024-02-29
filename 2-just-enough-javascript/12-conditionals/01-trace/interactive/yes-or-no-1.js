// #todo

'use strict';

let didConfirm = confirm('yes?');

let message;
if (didConfirm) {
  message = 'ok';
} else {
  message = 'no';
}

alert(message);

let didConfirm1 = confirm('You sure?');

let message1;
if (didConfirm1) {
  message1 = 'goood';
} else {
  message1 = 'Noooo';
}

alert(message1);
