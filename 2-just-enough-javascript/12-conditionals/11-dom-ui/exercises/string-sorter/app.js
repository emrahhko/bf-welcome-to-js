import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('to-sort', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let textA = readString('string-a');
  let textB = readString('string-b');

  // --- sort them input by length ---
  let message = '';
  if (textA.length < textB.length) {
    message = textA + ', ' + textB;
  } else if (textA.length > textB.length) {
    message = textB + ', ' + textA;
  } else {
    message = textA + '\n' + textB;
  }

  // --- display the sorted strings ---
  displayString('sorted', message);
});
