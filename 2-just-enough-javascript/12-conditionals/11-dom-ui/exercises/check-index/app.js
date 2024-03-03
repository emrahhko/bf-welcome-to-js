import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');
  debugger;
  // --- read the user's input ---
  let text = readString('text');
  let chars = readString('character');
  let index = readNumber('i');

  // --- check the index ---
  let output = '';

  if (chars) {
    if (text[index] === chars) {
      output = 'yes';
    } else {
      output = 'no';
    }
  } else {
    output = 'oops! you entered fewer than one character';
  }

  // --- display the search results ---
  displayString('search-result', output);
});
