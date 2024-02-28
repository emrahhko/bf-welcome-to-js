// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nums', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let left = readNumber('left-num');
  console.log(left);

  let right = readNumber('right-num');
  console.log(right);
  // --- compare the numbers ---
  let compareNumb1 = left > right;
  let compareNumb2 = left >= right;
  let compareNumb3 = left === right;
  let compareNumb4 = left <= right;
  let compareNumb5 = left < right;

  // --- create a message
  let displayComp =
    left +
    ' > ' +
    right +
    ' ' +
    '----> ' +
    compareNumb1 +
    '\n' +
    left +
    ' >= ' +
    right +
    ' ' +
    '---> ' +
    compareNumb2 +
    '\n' +
    left +
    ' === ' +
    right +
    ' ' +
    '--> ' +
    compareNumb3 +
    '\n' +
    left +
    ' <= ' +
    right +
    ' ' +
    '---> ' +
    compareNumb4 +
    '\n' +
    left +
    ' < ' +
    right +
    ' ' +
    '----> ' +
    compareNumb5;
  // --- display the message ---
  displayString('compared', displayComp);
});
