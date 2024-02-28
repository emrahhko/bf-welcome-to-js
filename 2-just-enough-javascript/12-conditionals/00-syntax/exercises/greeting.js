// #todo

// prettier-ignore
// so prettier does not remove the extra spacing

'use strict';

let name = prompt('what is your name?');

let greeting = '';

if (name !== null) {
  greeting = 'hello ' + name + '!';
} else {
  greeting = 'no name?!';
}

alert(greeting);

let name1 = prompt('what is your second name?');

let greeting1 = '';

if (name1 !== null) {
  greeting1 = 'hello ' + name1 + '!';
} else {
  greeting1 = 'no name?!';
}

alert(greeting1);
