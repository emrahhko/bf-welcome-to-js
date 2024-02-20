'use strict';

// let text = null;
// while (text === null) {
//   text = prompt('enter some text, each character will be doubled:');
// }

// let doubled = '';
// for (let nextChar of text) {
//   doubled = doubled + nextChar + nextChar;
// }

// alert(doubled);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/

// My code

debugger;

let text2 = null;
while (text2 === null) {
  text2 = prompt(
    'enter some text, and for each character a dash will be add :',
  );
}

let dashed = '';
for (let char of text2) {
  dashed = dashed + char + '-';
}

alert(dashed);
