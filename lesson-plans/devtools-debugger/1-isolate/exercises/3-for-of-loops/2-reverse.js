'use strict';

// let toReverse = null;
// while (toReverse === null) {
//   toReverse = prompt('enter something to reverse:');
// }

// let backwards = '';
// for (let nextChar of toReverse) {
//   backwards = nextChar + backwards;
// }

// let transformation = toReverse + ' -> ' + backwards;

// alert(transformation);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/

// let toReverse2 = null;
// while (toReverse2 === null) {
//   toReverse2 = prompt('enter something to reverse:');
// }

// let backwards2 = '';
// for (let nextChar2 of toReverse2) {
//   backwards2 = nextChar + backwards2;
// }

// let transformation2 = toReverse2 + '->' + backwards2;

// alert(transformation2);

// My code

let toReverse2 = null;
while (toReverse2 === null) {
  toReverse2 = prompt('enter something to reverse:');
}

let backwards2 = '';
for (let nextChar2 of toReverse2) {
  backwards2 = nextChar2 + backwards2;
}

let transformation2 = toReverse2 + ' -> ' + backwards2;

alert(transformation2);

let toNormal = '';
for (const char of backwards2) {
  toNormal = char + toNormal;
}

let transformationAgain = backwards2 + ' -> ' + toNormal;

alert(transformationAgain);
