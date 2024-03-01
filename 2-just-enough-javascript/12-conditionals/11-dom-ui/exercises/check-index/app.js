import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let text = readString('text');
  let chars = readString('character');
  let index = readString('i');

  // --- check the index ---
  let input;

  if (chars) {
    if (text[index])
  }

  // --- display the search results ---
});
