import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  let left = readNumber('left');
  console.log(left);

  let right = readNumber('right');
  console.log(right);
  // --- multiply the numbers ---
  let multiplyResult = left * right;
  console.log(multiplyResult);
  // --- create a message ---
  // let calculDisplay = left + ' ' + 'x ' + right + ' ' + '= ' + multiplyResult;
  let calculDisplay = left + ' ' + '* ' + right + ' ' + '=== ' + multiplyResult;
  // --- display the message ---
  displayString('product', calculDisplay);
});
