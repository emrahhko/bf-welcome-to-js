// #todo

'use strict';

let word = 'bike';
// let word = 'bike';
// let word = 'f';
// let word = ' i o u ';
// let word = 'done.';

let reversed = '';

let index = word.length - 1;
while (word.length !== reversed.length) {
  let nextChar = word[index];
  reversed = reversed + nextChar;
  index = index - 1;
}

console.log(word, reversed);

let word1 = 'trabzonspor';

let reversed1 = '';

let index1 = word1.length - 1;
while (word1.length !== reversed1.length) {
  let nexhtChar1 = word1[index1];
  reversed1 = reversed1 + nexhtChar1;
  index1 = index1 - 1;
}

console.log(word1 + '\n' + reversed1);
