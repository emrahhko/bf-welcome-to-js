import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let likeCat = readBoolean('likes-cats');
  let allergicToCat = readBoolean('is-allergic');
  let ownACat = readBoolean('owns-one');

  // --- generate good advice ---
  let advice;

  if (likeCat && allergicToCat && ownACat) {
    advice = 'replace your cat with a stuffed animal';
  } else if (!likeCat && allergicToCat && !ownACat) {
    advice = 'you are doing great';
  } else if (likeCat && !allergicToCat && ownACat) {
    advice = 'you are doing great';
  } else if (!likeCat && !allergicToCat && !ownACat) {
    advice = 'you are doing great';
  } else if (likeCat && !allergicToCat && !ownACat) {
    advice = 'get a cat';
  } else if (!likeCat && !allergicToCat && ownACat) {
    advice = 'you could be doing worse';
  } else if (likeCat && allergicToCat && !ownACat) {
    advice = 'make a friend who has a cat';
  } else if (!likeCat && allergicToCat && ownACat) {
    advice = 'rethink your life choices';
  }

  // --- display advice for the user ---
  displayString('custom-advice', advice);
});
