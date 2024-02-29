// #todo

'use strict';

let word = 'bear';
let word1 = 'wine';
// let word = 'a';
// let word = 'be';
// let word = 'eat';
// let word = 'ear';
// let word = 'peat';
// let word = 'bear';
// let word = 'early';
// let word = 'burly';
// let word = 'pearly';
// let word = 'poultry';

let message;
if (word.length >= 3) {
  if (word.includes('ear')) {
    message = 'eary word!';
  } else {
    message = 'not eary :(';
  }
} else {
  message = 'word is too short';
}

console.log(message);

let message1;
if (word1.length >= 3) {
  if (word1.includes('ine')) {
    message1 = "that's a fINE word ;)";
  } else {
    message1 = "that's not fINE :( word";
  }
} else {
  message1 = 'word is too short :(';
}

console.log(message1);
