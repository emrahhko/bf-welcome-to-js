import {
  whenFormDataChanges,
  readNumber,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('inputs', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let left = readNumber('left');
  console.log(left);
  let right = readNumber('right');
  console.log(right);

  let operator = readString('operator');

  // --- calculate the result ---
  let calcul;
  if (operator === '+') {
    calcul = left + right;
  } else if (operator === '-') {
    calcul = left - right;
  } else if (operator === '*') {
    calcul = left * right;
  } else {
    calcul = left / right;
  }
  // --- display the result ---
  displayString('result', '$ ' + calcul);
});
