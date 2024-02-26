// #todo

'use strict';

let a = 'bye';
let b = 'hi';
let temp;

temp = a;
a = b;
b = temp;

console.log('a:', a);
console.log('b:', b);
console.log('temp:', temp);

let first = 1;
let second = 2;
let third;

third = first;

first = second;

second = third;

console.log(first, second);
