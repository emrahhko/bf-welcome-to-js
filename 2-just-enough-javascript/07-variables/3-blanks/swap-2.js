// #todo

'use strict';

let a = 'y';
let b = 'x';
let temp;

temp = b;
b = a;
a = temp;

console.log('a:', a);
console.log('b:', b);
console.log('temp:', temp);

let first = 1;
let second = 2;
let third;

third = second;
second = first;
first = third;

console.log(first);
console.log(second);
//console.log(third);
