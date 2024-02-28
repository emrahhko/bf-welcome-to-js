// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let left = readNumber('left-num');
  console.log(left);
  let right = readNumber('right-num');
  console.log(right);

  // --- do the math ---
  let addition = left + right;
  let subtraction = left - right;
  let multiply = left * right;
  let divide = left / right;
  let modulo = left % right;

  // --- create a message
  let displayResult =
    ' __ + __ === ' +
    addition +
    '\n' +
    ' __ - __ === ' +
    subtraction +
    '\n' +
    ' __ x __ === ' +
    multiply +
    '\n' +
    ' __ / __ === ' +
    divide +
    '\n' +
    ' __ % __ === ' +
    modulo;
  // --- display the message ---
  displayString('sum', displayResult);
});
