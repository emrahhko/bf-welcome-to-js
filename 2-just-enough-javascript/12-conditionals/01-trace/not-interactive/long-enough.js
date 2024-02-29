// #todo

'use strict';

// let word = 'a';
// let word = 'be';
// let word = 'sea';
let word = 'fro';
// let word = 'apple';
// let word = 'banana';
let word1 = 'pon';

let message;
if (word.length <= 2) {
  message = 'a short word';
} else if (word.length < 3) {
  // why is this path unreachable?
  // because less than 3 is 2 and it's the first condition on line 14
  // for the path to bee reachable we must add less than or equal " <= 3" on line 16
  message = 'unreachable path!';
} else if (word.length < 5) {
  message = 'a perfect word';
} else {
  message = 'a long word';
}

console.log(message);

let message1;
if (word1.length <= 2) {
  message1 = 'a short word';
} else if (word1.length <= 3) {
  message1 = 'the path is now reachable!';
} else if (word1.length <= 5) {
  message1 = 'a perfect lenght';
} else {
  message1 = 'a too long word';
}

console.log(message1);
