// #todo

'use strict';

debugger;

let text = null;
while (text === null || text === '') {
  text = prompt('enter something to reverse');
}

let reversed = '';

let index = 0;
while (index < text.length) {
  let nextChar = text[index];
  reversed = nextChar + reversed;
  index = index + 1;
}

alert(text + ' -> ' + reversed);

let text1 = null;

while (text1 === null || text1 === '') {
  text1 = prompt('enter something else to reverse');
}

let reversed1 = '';
let index1 = 0;

while (index1 < text1.length) {
  let nextChar1 = text1[index1];
  reversed1 = nextChar1 + reversed1;
  index1 = index1 + 1;
}

alert(text1 + ' => ' + reversed1);

/*
  - find all the variable declarations
  - mark each variable use with a different color (like in the ?variables lens)
  - use lines to connect each variable declaration to it's uses
  - how many operators can you find in this program (including repeated operators)
  - how many different operators can you find in this program?
  - what types are used with each operator?

  done with these questions?  try "ask me" and "random line"
*/
