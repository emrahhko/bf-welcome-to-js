'use strict';

debugger;

let input = null;

while (input === null) {
  input = prompt('type nothing and click "enter"');
}

let message = '';
if (input === '') {
  message = 'thank you for nothing!';
} else {
  message = 'this is not nothing: ' + input;
}

alert(message);

let input1 = null;

while (input1 === null) {
  input1 = prompt("type again nothing and click 'enter'");
}

let message1 = '';

if (input1 === '') {
  message1 = 'again thank you for nothing!';
} else {
  message1 = ' again this is not nothing: ' + input1;
}

alert(message1);
