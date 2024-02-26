'use strict';

/* 1. declare 3 variables */

let a1 = 'y';
let b1 = 'x';
let temp;

/* 2. swap the values between a and b */

/* parsons-collapse: hint
  1. read the value from 'b' and assign it to 'temp'
  2. read the value from 'a' and assign it to 'b'
  3. read the value from 'temp' and assign it to 'a'
*/

temp = b1;
b1 = a1;
a1 = temp;

/* 3. compare the final values */

console.log(a1 === 'x');
console.log(b1 === 'y');
console.log(temp === 'x');

// begin distractors

//a = c; // distractor
//b = temp; // distractor
//a = 'y'; // distractor

// #todo
