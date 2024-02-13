'use strict';

debugger;

let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

let b = 'Hello ' + a + ', your name is ';

if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

console.log(b);

// My code

let z = 'Celine';

let y = 'Hello ' + z + ' , your name is ';
if (z.length > 6) {
  y = y + 'too long.';
} else if (z.length === 6) {
  y = y + 'perfect.';
} else {
  y = y + 'short.';
}

console.log(y);

let month = 'September';

let p = 'Is ' + month + ' the longest month name in english? ';

if (month.length > 9) {
  p = p + 'No too long';
} else if (month.length === 9) {
  p = p + 'Yes, it is';
} else p = p + 'No too short';

console.log(p);

// let month = "july";
// let month = prompt('enter the longest month name in english', 'ex. july');
// let month = "august";

// let x = "Yes that's it " + month + ' is the longest month name in english';

// if (month.length > 9) {
//   console.log('too long');
// } else if (month.length === 9) {
//   console.log(x);
// } else {
//   console.log('too short');
// }
