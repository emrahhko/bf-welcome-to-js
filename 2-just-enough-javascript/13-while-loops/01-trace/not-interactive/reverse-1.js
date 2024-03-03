// #todo

'use strict';
// debugger;
let word = 'done.';
// let word = 'bike';
// let word = 'f';
// let word = ' i o u ';
// let word = 'done.';

let reversed = '';

let index = 0;
while (word.length !== reversed.length) {
  let nextChar = word[index];
  reversed = nextChar + reversed;
  index = index + 1;
}

console.log(word, reversed);

let word1 = 'patates';

let reversed1 = '';

let index1 = 0;
while (word1.length !== reversed1.length) {
  let nextChar1 = word1[index1];
  reversed1 = nextChar1 + reversed1;
  index1 = index1 + 1;
}

console.log(word1 + '\n' + reversed1);
