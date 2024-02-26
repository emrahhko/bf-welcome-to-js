// #todo

'use strict';

let a = 'y';
let b = 'x';
let temp;

temp = b;
b = a;
a = temp;

console.log(a === 'x'); // true
console.log(b === 'y'); // true
console.log(temp === 'x'); // true

let first = 1;
let second = 2;
let temp1;

temp1 = first;
first = second;
second = temp1;

console.log(first);
console.log(second);
//console.log(temp1);

console.log(first === 2);
console.log(second === 1);
console.log(temp1 === 1);
