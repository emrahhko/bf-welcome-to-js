// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-words', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let noun = readString('noun');
  console.log(noun);

  let verb = readString('verb');
  console.log(verb);

  let adj = readString('adjective');
  console.log(adj);
  // --- create a funny sentence ---
  let sentence =
    'On ' +
    adj +
    ' ' +
    'days the ' +
    noun +
    ' ' +
    'will always ' +
    ' ' +
    verb +
    '.';
  // --- display the sentence ---
  displayString('funny-sentence', sentence);
});
