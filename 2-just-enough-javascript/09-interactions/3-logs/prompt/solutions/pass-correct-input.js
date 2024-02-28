'use strict';

let input1 = prompt('"hi"');
console.log(typeof input1);
console.log(input1 === 'hi'); // 'hi'

let input2 = prompt('null');
console.log(typeof input2);
console.log(input2); // null

let input3 = prompt('"bye"');
console.log(typeof input3);
console.log(input3 === 'bye'); // 'bye'

let input4 = prompt('""');
console.log(typeof input4);
console.log(input4 === ''); // ''
