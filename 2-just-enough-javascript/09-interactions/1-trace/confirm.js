// #todo

'use strict';

/*
  input the correct values to log the expected values
*/

let confirm1 = confirm('1. agree to this one');
console.log(confirm1 === true); // true

let confirm2 = confirm('2. do not agree to this one');
console.log(confirm2 === false); // true

let confirm3 = confirm('3. this is a test confirm please');
console.log(confirm3 === true);
