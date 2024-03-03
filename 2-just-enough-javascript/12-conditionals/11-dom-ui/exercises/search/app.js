import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let firstText = readString('text');
  let secondText = readString('query');
  let caseSensitive = readBoolean('sensitive');
  // --- do the search ---
  let message = '';

  if (caseSensitive) {
    if (firstText.includes(secondText)) {
      console.log('sensitive yes');
      message = 'yes';
    } else {
      console.log('sensitive nope');
      message = 'no';
    }
  } else {
    let firstText2 = firstText.toLowerCase();
    let secondText2 = secondText.toLowerCase();
    if (firstText2.includes(secondText2)) {
      console.log('INsensitive YES');
      message = 'yes';
    } else {
      console.log('INsensitive NO');
      message = 'nope';
    }
  }

  // --- display the search results ---
  displayString('search-result', message);
});
