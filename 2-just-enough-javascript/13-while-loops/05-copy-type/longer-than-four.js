// #todo

'use strict';

let input = '';
while (input !== null && input.length <= 4) {
  input = prompt('enter something longer than 4 characters');
}
alert(input);

let input0 = '';
while (input0 !== null && input0.length <= 4) {
  input0 = prompt('enter something else longer than 4 characters');
}
alert(input0);

let input1 = '';
while (input1 === null || input1.length <= 4) {
  input1 = prompt('enter something else else longer than 4 characters');
}
alert(input1);
