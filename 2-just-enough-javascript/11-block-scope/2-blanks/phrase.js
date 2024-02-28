// #todo

'use strict';

let phrase = '';

{
  let word = 'hello';
  phrase = phrase + word;
  console.log(phrase);
}

{
  let word = 'world';
  phrase = phrase + ' ' + word;
  console.log(phrase);
}

console.log(phrase === 'hello world'); // true

/* distractors:

  hello

  world

*/
