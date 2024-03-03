// #todo

'use strict';

let animal = 'dog';
// let animal = 'cat';
// let animal = 'horse';
// let animal = 'fish';
// let animal = 'whale';
// let animal = 'elephant';
// let animal = 'snake';
// let animal = 'dove';

let repeated = '';
let i = 0;
while (i < animal.length) {
  repeated = repeated + '\n' + animal;
  i = i + 1;
}

console.log(repeated);

let animal1 = 'cat';

let repeated1 = '';
let y = 0;
while (y < animal1.length) {
  repeated1 = repeated1 + '\n' + animal1;
  y = y + 1;
  console.log(y);
}

// console.log(y);
console.log(repeated1);
