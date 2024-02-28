'use strict';

let input1 = confirm('agree');
console.log(input1); // true

let input2 = confirm('disagree');
console.log(input2); // false

let input3 = confirm('agree');
console.log(input3); // true

let input4 = confirm('agree');
console.log(input4 === true);

let input5 = confirm('disagree');
console.log(input5 === false);

let input6 = confirm('agree');
console.log(input6 === true);
