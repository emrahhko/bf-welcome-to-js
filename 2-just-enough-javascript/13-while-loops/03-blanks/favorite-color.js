// #todo

'use strict';

debugger;

let message = 'your favorite color is ';

let isEmpty = true;
while (isEmpty) {
  let input = prompt('what is your favorite color?');

  if (input === null) {
    alert('there is no escape');
  } else if (input.length === 0) {
    alert('input cannot be empty');
  } else {
    message = message + input;
    isEmpty = false;
  }
}

alert(message);

let message1 = 'your favorite animal is ';

let isEmpty1 = true;
while (isEmpty1) {
  let input1 = prompt('what is your favorite animal?');

  if (input1 === null) {
    alert('there is no escape');
  } else if (input1.length === 0) {
    alert('input cannot be empty');
  } else {
    message1 = message1 + input1;
    isEmpty1 = false;
  }
}

alert(message1);

/* distractors:


    While


*/
