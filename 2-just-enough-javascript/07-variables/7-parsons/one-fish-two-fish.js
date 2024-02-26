// #todo

'use strict';

/* ------------ instructions ----------- */

/*
  construct the phrase 'one fish two fish'
*/

/* parsons-collapse: hint

  1. declare and initialize a variable storing a space
  2. assign 'one fish' to phrase
  3. assign 'one fish two' to phrase
  4. assign 'one fish two fish' to phrase
  5. make sure the greeting is correct

*/

/* ----------- solution --------------- */

let phrase = ' ';

phrase = 'one' + phrase + 'fish';

phrase = phrase + ' two';

phrase = phrase + ' fish';

console.log(phrase === 'one fish two fish');

/* ----------- distractors -------------- */

let phrase1 = '';

phrase1 = 'one' + phrase1 + ' fish' + phrase1; // distractor
phrase1 = phrase1 + ' two'; // distractor
phrase1 = phrase1 + ' fish'; // distractor

console.log(phrase1);
console.log(phrase1 === 'one fish two fish');
